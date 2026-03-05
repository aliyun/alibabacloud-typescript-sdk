// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckResourceMeasureRequest extends $dara.Model {
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
   * 1
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
   * InspirationTokens
   */
  resourceCode?: string;
  /**
   * @example
   * 1
   */
  resourceValue?: number;
  static names(): { [key: string]: string } {
    return {
      belongId: 'BelongId',
      belongIdType: 'BelongIdType',
      bizType: 'BizType',
      espBizId: 'EspBizId',
      orderComponentParams: 'OrderComponentParams',
      resourceCode: 'ResourceCode',
      resourceValue: 'ResourceValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      belongId: 'string',
      belongIdType: 'string',
      bizType: 'string',
      espBizId: 'string',
      orderComponentParams: 'string',
      resourceCode: 'string',
      resourceValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

