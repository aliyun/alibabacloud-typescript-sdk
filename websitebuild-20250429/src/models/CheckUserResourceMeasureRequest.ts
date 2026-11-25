// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckUserResourceMeasureRequest extends $dara.Model {
  /**
   * @remarks
   * The owner ID, which can be a website ID or an Alibaba Cloud user ID.
   * 
   * @example
   * 123456
   */
  belongId?: string;
  /**
   * @remarks
   * The owner ID type, such as siteId or uid.
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
   * 1
   */
  bizType?: string;
  /**
   * @remarks
   * The desired total for APP_WORKSPACE. This is an optional compatible total with a range of 0 to 100,000. If provided, it takes precedence over ResourceValue and does not repeatedly add the used quota. For new calls, only ResourceValue is required. This field is not used for APP or USER.
   * 
   * @example
   * 21
   */
  desiredTotal?: number;
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
   * The order component information in JSON format. If this parameter is left empty, EspBizId and BizType cannot be empty.
   * 
   * @example
   * {"siteversion":"test"}
   */
  orderComponentParams?: string;
  /**
   * @remarks
   * The resource code.
   * 
   * @example
   * InspirationTokens
   */
  resourceCode?: string;
  /**
   * @remarks
   * The resource value. This parameter is left empty by default and is required only for feature resources. Valid values:
   * - 0: Not supported.
   * - 1: Supported.
   * 
   * @example
   * 1
   */
  resourceValue?: number;
  static names(): { [key: string]: string } {
    return {
      belongId: 'BelongId',
      belongIdType: 'BelongIdType',
      bizType: 'BizType',
      desiredTotal: 'DesiredTotal',
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
      desiredTotal: 'number',
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

