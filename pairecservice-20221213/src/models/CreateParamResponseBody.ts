// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateParamResponseBody extends $dara.Model {
  /**
   * @example
   * 4
   */
  paramId?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F8F613A9-DF1C-551A-88E1-397A3981A785
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      paramId: 'ParamId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramId: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

