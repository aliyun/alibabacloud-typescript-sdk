// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCheckResourceMeasureRequest extends $dara.Model {
  /**
   * @remarks
   * Belonging ID (website ID or Alibaba Cloud User ID)
   * 
   * @example
   * 123456
   */
  belongId?: string;
  /**
   * @remarks
   * Belonging ID Type (siteId, uid)
   * 
   * @example
   * USER
   */
  belongIdType?: string;
  /**
   * @remarks
   * ESP business type
   * 
   * @example
   * 4
   */
  bizType?: string;
  /**
   * @remarks
   * ESP business ID
   * 
   * @example
   * p20202933455
   */
  espBizId?: string;
  /**
   * @remarks
   * Order module information (automatically completed if empty)
   * 
   * @example
   * {"siteversion":"test"}
   */
  orderComponentParams?: string;
  /**
   * @remarks
   * List of resource check items, in JSON array format
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

