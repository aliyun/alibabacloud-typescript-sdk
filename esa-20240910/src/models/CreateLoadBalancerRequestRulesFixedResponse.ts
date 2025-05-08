// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerRequestRulesFixedResponse extends $dara.Model {
  /**
   * @remarks
   * Content-Type field in the HTTP Header.
   * 
   * @example
   * application/octet-stream
   */
  contentType?: string;
  /**
   * @remarks
   * Location field in the HTTP response.
   * 
   * @example
   * http://www.example.com/index.html
   */
  location?: string;
  /**
   * @remarks
   * Response body value.
   * 
   * @example
   * Hello World!
   */
  messageBody?: string;
  /**
   * @remarks
   * Response status code.
   * 
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      location: 'Location',
      messageBody: 'MessageBody',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      location: 'string',
      messageBody: 'string',
      statusCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

