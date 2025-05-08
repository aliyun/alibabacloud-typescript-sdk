// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoadBalancerResponseBodyRulesFixedResponse extends $dara.Model {
  /**
   * @remarks
   * The Content-Type field in the HTTP Header.
   * 
   * @example
   * application/json
   */
  contentType?: string;
  /**
   * @remarks
   * The location field in the HTTP response.
   * 
   * @example
   * http://www.example.com/index.html
   */
  location?: string;
  /**
   * @remarks
   * The body value of the response.
   * 
   * @example
   * Hello World.
   */
  messageBody?: string;
  /**
   * @remarks
   * Status code.
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

