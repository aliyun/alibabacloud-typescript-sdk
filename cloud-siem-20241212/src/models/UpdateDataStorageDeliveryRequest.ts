// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataStorageDeliveryRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response message. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The log code.
   * 
   * This parameter is required.
   * 
   * @example
   * aegis-log-login
   */
  logCode?: string;
  /**
   * @remarks
   * The status of log delivery. Valid values:
   * 
   * - enable: Enables log delivery.
   * 
   * - disable: Disables log delivery.
   * 
   * @example
   * enable
   */
  logDeliveryStatus?: string;
  /**
   * @remarks
   * The region where the Data Management hub for Threat Analysis is located. Select the region of the management hub based on the region of your asset. Valid values:
   * 
   * - cn-hangzhou: Your asset is in the Chinese mainland.
   * 
   * - ap-southeast-1: Your asset is in a region outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member. This parameter is used when an administrator switches to the perspective of a member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      logCode: 'LogCode',
      logDeliveryStatus: 'LogDeliveryStatus',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      logCode: 'string',
      logDeliveryStatus: 'string',
      regionId: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

