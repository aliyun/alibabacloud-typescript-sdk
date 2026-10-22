// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckResourceMeasureRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the owner, such as the website ID or Alibaba Cloud user ID.
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
   * 1
   */
  bizType?: string;
  /**
   * @remarks
   * The desired total for APP_WORKSPACE. Valid values: 0 to 100000. If this parameter is specified, it takes precedence over ResourceValue and is not added to the existing usage. For new calls, you only need to specify ResourceValue. This parameter is not used for APP or USER.
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
   * The order component parameters. If this parameter is empty, EspBizId and BizType cannot be empty.
   * 
   * @example
   * {"siteversion":"test"}
   */
  orderComponentParams?: string;
  /**
   * @remarks
   * The resource identifier.
   * 
   * @example
   * InspirationTokens
   */
  resourceCode?: string;
  /**
   * @remarks
   * The resource value. This parameter is empty by default and is required only for feature resources. Valid values: 0: Not supported. 1: Supported.
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

