// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadPageItem extends $dara.Model {
  /**
   * @remarks
   * The error related to the target URL.
   * 
   * @example
   * null
   */
  errorMessage?: string;
  /**
   * @remarks
   * The readable HTML of the target URL.
   * 
   * @example
   * <html>\\n<head><title>Example Domain</title></head>\\n<body><div>\\n<h1>Example Domain</h1>\\n<p>This domain is for use in documentation examples without needing permission. Avoid use in operations.</p>\\n<p><a href=\\"https://iana.org/domains/example\\">Learn more</a></p>\\n</div></body>\\n</html>
   */
  html?: string;
  /**
   * @remarks
   * The Markdown content of the target URL.
   * 
   * @example
   * # Example Domain\\nThis domain is for use in documentation examples without needing permission. Avoid use in operations.\\n[Learn more](https://iana.org/domains/example)\\n
   */
  markdown?: string;
  /**
   * @remarks
   * The raw HTML of the target URL.
   * 
   * @example
   * <!doctype html><html lang=\\"en\\"><head><title>Example Domain</title><meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1\\"><style>body{background:#eee;width:60vw;margin:15vh auto;font-family:system-ui,sans-serif}h1{font-size:1.5em}div{opacity:0.8}a:link,a:visited{color:#348}</style><body><div><h1>Example Domain</h1><p>This domain is for use in documentation examples without needing permission. Avoid use in operations.<p><a href=\\"https://iana.org/domains/example\\">Learn more</a></div></body></html>\\n
   */
  rawHtml?: string;
  screenshot?: string;
  /**
   * @remarks
   * 1. If the request to the target site succeeds, the HTTP status code of the target URL is returned.
   * 
   * 2. If the request to the target site fails, a custom error code is returned:
   * 
   *     2.1 4030: The target site has security restrictions, such as robots.txt or security policies.
   *     
   *     2.2 4080: The request timed out.
   *     
   *     2.3 4290: The rate limiting policy of the site was triggered.
   *     
   *     2.4 5010: An unknown exception occurred.
   * 
   * @example
   * 200
   */
  statusCode?: number;
  /**
   * @remarks
   * The text content of the target URL.
   * 
   * @example
   * # Example Domain\\nThis domain is for use in documentation examples without needing permission. Avoid use in operations.\\nLearn more\\n
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      html: 'html',
      markdown: 'markdown',
      rawHtml: 'rawHtml',
      screenshot: 'screenshot',
      statusCode: 'statusCode',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      html: 'string',
      markdown: 'string',
      rawHtml: 'string',
      screenshot: 'string',
      statusCode: 'number',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

