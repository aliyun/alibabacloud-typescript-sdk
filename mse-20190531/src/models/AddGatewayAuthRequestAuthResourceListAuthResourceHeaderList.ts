// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGatewayAuthRequestAuthResourceListAuthResourceHeaderList extends $dara.Model {
  /**
   * @example
   * x-req
   */
  headerKey?: string;
  /**
   * @example
   * EQUAL
   */
  headerMethod?: string;
  /**
   * @example
   * 123
   */
  headerValue?: string;
  static names(): { [key: string]: string } {
    return {
      headerKey: 'HeaderKey',
      headerMethod: 'HeaderMethod',
      headerValue: 'HeaderValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerKey: 'string',
      headerMethod: 'string',
      headerValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

