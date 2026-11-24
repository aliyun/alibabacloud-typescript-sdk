// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlertRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert associated with the event.
   * 
   * Note: This parameter is required. If you do not specify this parameter, the service returns a 400 error.
   * 
   * @example
   * sas_71e24437d2797ce8fc59692905a4****
   */
  alertUuid?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * Note: This parameter is required. If you do not specify this parameter, the service returns a 400 error.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region where the data management center of Threat Analysis is located. Select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: The assets are located in the Chinese mainland.
   * - ap-southeast-1: The assets are located outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user whose perspective the administrator switches to.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * - 0: The view of the current Alibaba Cloud account.
   * - 1: The view of all accounts in the enterprise.
   * 
   * @example
   * 1
   */
  roleType?: number;
  static names(): { [key: string]: string } {
    return {
      alertUuid: 'AlertUuid',
      lang: 'Lang',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertUuid: 'string',
      lang: 'string',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

