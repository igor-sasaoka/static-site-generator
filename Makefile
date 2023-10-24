run:
	go run .
	npx tailwindcss -i ./static/css/main.css -o ./static/css/build.css --minify
	cp ./static/img/* ./deploy/static/img/ -f
	cp ./static/css/build.css ./deploy/static/css/ -f
	cd deploy
	git add .
	git commit -m "content update"
	git push origin main
	cd ../
