// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCheckResourceMeasureRequest extends $dara.Model {
  /**
   * @remarks
   * The owner ID, which can be a website ID or an Alibaba Cloud account ID.
   * 
   * @example
   * 123456
   */
  belongId?: string;
  /**
   * @remarks
   * The type of the owner ID. Valid values: siteId and uid.
   * 
   * @example
   * USER
   */
  belongIdType?: string;
  /**
   * @remarks
   * The ESP business type.
   * 
   * @example
   * 4
   */
  bizType?: string;
  /**
   * @remarks
   * The ESP business ID.
   * 
   * @example
   * p20202933455
   */
  espBizId?: string;
  /**
   * @remarks
   * The order module information. If this parameter is left empty, the information is automatically completed.
   * 
   * @example
   * {"siteversion":"test"}
   */
  orderComponentParams?: string;
  /**
   * @remarks
   * The list of resource check items in JSON array format.
   * 
   * @example
   * [
   *                   {
   *                     "resourceCode": "InspirationTokens",
   *                     "resourceValue": "0"
   *                   }
   *                 ]
   */
  resourceCheckItems?: string;
  static names(): { [key: string]: string } {
    return {
      belongId: 'BelongId',
      belongIdType: 'BelongIdType',
      bizType: 'BizType',
      espBizId: 'EspBizId',
      orderComponentParams: 'OrderComponentParams',
      resourceCheckItems: 'ResourceCheckItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      belongId: 'string',
      belongIdType: 'string',
      bizType: 'string',
      espBizId: 'string',
      orderComponentParams: 'string',
      resourceCheckItems: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

