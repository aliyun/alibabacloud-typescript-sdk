// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGatewayRouteWafStatusResponseBodyDataDirectResponse extends $dara.Model {
  /**
   * @remarks
   * The mock return value.
   * 
   * @example
   * [{\\"key\\":\\"h68d13466.sqa.eu95\\",\\"dims\\":\\"groupName=All}]
   */
  body?: string;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * 200
   */
  code?: number;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      code: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

