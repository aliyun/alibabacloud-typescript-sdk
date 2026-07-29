// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebFetchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the web page.
   * 
   * @example
   * Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications.
   */
  content?: string;
  /**
   * @remarks
   * The actual output format. Valid values:
   * 
   * - **markdown**: Markdown format.
   * 
   * - **html**: HTML format.
   * 
   * - **text**: Plain text format.
   * 
   * @example
   * markdown
   */
  contentFormat?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * ErrorMessage Code
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * ErrorMessage Example
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A30D0930-xxxx-xxxx-xxxx-C2C661CC8B58
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The title of the web page.
   * 
   * @example
   * Spring Boot
   */
  title?: string;
  /**
   * @remarks
   * The URL of the web page.
   * 
   * @example
   * https://xxxx/projects/spring-boot
   */
  url?: string;
  /**
   * @remarks
   * The URL classification result. Valid values:
   * - **static_html**: Static HTML page.
   * - **dynamic_js**: Single-page application (SPA) page that requires JavaScript rendering.
   * - **audio**: Audio file.
   * - **video**: Video file.
   * - **document**: Document file (PDF, Word, PPT, or Excel).
   * - **unknown**: Unrecognizable.
   * 
   * @example
   * static_html
   */
  urlType?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentFormat: 'ContentFormat',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
      title: 'Title',
      url: 'Url',
      urlType: 'UrlType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentFormat: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
      title: 'string',
      url: 'string',
      urlType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

