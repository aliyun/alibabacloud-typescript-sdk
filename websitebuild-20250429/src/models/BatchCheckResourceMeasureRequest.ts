// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCheckResourceMeasureRequest extends $dara.Model {
  /**
   * @example
   * 123456
   */
  belongId?: string;
  /**
   * @example
   * USER
   */
  belongIdType?: string;
  /**
   * @example
   * 4
   */
  bizType?: string;
  /**
   * @example
   * p20202933455
   */
  espBizId?: string;
  /**
   * @example
   * {"siteversion":"test"}
   */
  orderComponentParams?: string;
  /**
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

