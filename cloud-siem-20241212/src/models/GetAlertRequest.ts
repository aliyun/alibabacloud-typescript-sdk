// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlertRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert associated with the event.
   * 
   * > This parameter is required. If this parameter is not specified, the service returns a 400 error.
   * 
   * @example
   * sas_71e24437d2797ce8fc59692905a4****
   */
  alertUuid?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * > This parameter is required. If this parameter is not specified, the service returns a 400 error.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region where the data management center of threat detection and response is located. Specify the management center region based on the region of your assets. Valid values:
   * - cn-hangzhou: Your assets belong to the Chinese mainland.
   * - ap-southeast-1: Your assets belong to regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the member to which the administrator switches the view.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The view type. Valid values:
   * 
   * - 0: the view of the current Alibaba Cloud account.
   * - 1: the view of all accounts in the enterprise.
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

