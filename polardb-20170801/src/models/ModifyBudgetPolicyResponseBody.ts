// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBudgetPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the gateway instance.
   * 
   * @example
   * pg-xxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 925B84D9-CA72-432C-95CF-738C22******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gwClusterId: 'GwClusterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gwClusterId: 'string',
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

