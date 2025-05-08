// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteGatewaySlbRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * Specifies whether to delete the SLB instance purchased for the gateway when you delete the gateway.
   * 
   * @example
   * true
   */
  deleteSlb?: boolean;
  /**
   * @remarks
   * The unique ID of the gateway.
   * 
   * @example
   * gw-c9bc5afd61014165bd58f621b491****
   */
  gatewayUniqueId?: string;
  /**
   * @remarks
   * The ID of the association record.
   * 
   * @example
   * 395
   */
  id?: string;
  /**
   * @remarks
   * The ID of the SLB instance that needs to be deleted.
   * 
   * @example
   * lb-uf6duug6s13x4abc8****
   */
  slbId?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      deleteSlb: 'DeleteSlb',
      gatewayUniqueId: 'GatewayUniqueId',
      id: 'Id',
      slbId: 'SlbId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      deleteSlb: 'boolean',
      gatewayUniqueId: 'string',
      id: 'string',
      slbId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

