// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVersionDistributionRequest extends $dara.Model {
  /**
   * @remarks
   * The terminal type. Valid values:
   * - 1: hardware terminal.
   * - 2: software terminal.
   * - 3: secure browser plugin.
   * - 4: GuestOS application.
   * - 5: DingTalk Wuying plugin.
   * - 6: cloud application component.
   * - 7: Cloud Hub.
   * - 8: H5.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  clientType?: number;
  /**
   * @remarks
   * The management status. A value of true indicates managed, and a value of false indicates unmanaged. If this parameter is not specified, all terminals are queried.
   */
  inManage?: boolean;
  /**
   * @remarks
   * The business type. Default value: enterprise.
   * 
   * @example
   * enterprise
   */
  mainBizType?: string;
  /**
   * @remarks
   * The terminal model.
   * 
   * This parameter is required.
   * 
   * @example
   * AS05-2DCXG
   */
  model?: string;
  /**
   * @remarks
   * The version type. Valid values:
   * - SYS: system version.
   * - APP: application version.
   * 
   * This parameter is required.
   * 
   * @example
   * SYS
   */
  versionType?: string;
  static names(): { [key: string]: string } {
    return {
      clientType: 'ClientType',
      inManage: 'InManage',
      mainBizType: 'MainBizType',
      model: 'Model',
      versionType: 'VersionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientType: 'number',
      inManage: 'boolean',
      mainBizType: 'string',
      model: 'string',
      versionType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

