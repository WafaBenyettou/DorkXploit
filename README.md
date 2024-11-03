# DorkXploit

DorkXploit is a web application designed to help users find dork patterns that can be used for information retrieval and vulnerability assessment. The application provides a user-friendly interface for searching various dorks categorized by type.

## Features

- User-friendly interface for searching dorks
- Categorized results for easy navigation
- Integration with Google search for quick results

## Getting Started

To get started with DorkXploit, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/WafaBenyettou/dorkXploit.git
   cd dorkXploit
   ```

2. Set up a virtual environment (optional):
   ```bash
   python -m venv env
   source env/bin/activate  # On Windows use `env\Scripts\activate`
   ```

3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the application:
   ```bash
   python app.py
   ```

5. Open your web browser and go to `http://127.0.0.1:5000` to access the application.

## Project Structure

```
dorkXploit/
├── app.py                  # Main application file
├── dorks/
│   └── dorks.json          # JSON file with dork patterns
├── env/                    # Virtual environment (optional)
├── requirements.txt        # Requirements file for dependencies
├── static/
│   └── style.css           # CSS file for styling
├── templates/
│   └── index.html          # HTML template for the app interface
└── __init__.py             # Can be empty; used to define the package
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to all the hours spent on this project by me and me alone.
