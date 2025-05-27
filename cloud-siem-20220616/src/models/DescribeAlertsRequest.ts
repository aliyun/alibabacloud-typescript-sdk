// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlertsRequest extends $dara.Model {
  /**
   * @example
   * 异常连接-TFTP恶意扫描
   */
  alertName?: string;
  /**
   * @remarks
   * The title of the alert.
   * 
   * @example
   * Unusual Logon-login_common_account
   */
  alertTitle?: string;
  /**
   * @example
   * 异常连接-TFTP恶意扫描
   */
  alertType?: string;
  /**
   * @remarks
   * The UUID of the alert.
   * 
   * @example
   * sas_71e24437d2797ce8fc59692905a4****
   */
  alertUuid?: string;
  /**
   * @example
   * 异常连接-TFTP恶意扫描
   */
  assetId?: string;
  /**
   * @example
   * 异常连接-TFTP恶意扫描
   */
  assetName?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1577808000000
   */
  endTime?: number;
  /**
   * @example
   * 异常连接-TFTP恶意扫描
   */
  entityId?: string;
  /**
   * @example
   * 异常连接-TFTP恶意扫描
   */
  entityName?: string;
  /**
   * @remarks
   * Specifies whether an attack is defended. Valid values:
   * 
   * *   0: detected.
   * *   1: blocked.
   * 
   * @example
   * 1
   */
  isDefend?: string;
  /**
   * @example
   * 176555323***
   */
  labelType?: string;
  /**
   * @remarks
   * The risk level. The value is a JSON array. Valid values:
   * 
   * *   serious: high
   * *   suspicious: medium
   * *   remind: low
   * 
   * @example
   * ["serious","suspicious","remind"]
   */
  level?: string[];
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the account that you switch from the management account.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  /**
   * @remarks
   * The type of the view. Valid values:
   * - 0: the current Alibaba Cloud account
   * - 1: the global account
   * 
   * @example
   * 1
   */
  roleType?: number;
  /**
   * @remarks
   * The source of the alert.
   * 
   * @example
   * sas
   */
  source?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Unit: milliseconds.
   * 
   * @example
   * 1577808000000
   */
  startTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account within which the alert is generated.
   * 
   * @example
   * 176555323***
   */
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      alertName: 'AlertName',
      alertTitle: 'AlertTitle',
      alertType: 'AlertType',
      alertUuid: 'AlertUuid',
      assetId: 'AssetId',
      assetName: 'AssetName',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      entityId: 'EntityId',
      entityName: 'EntityName',
      isDefend: 'IsDefend',
      labelType: 'LabelType',
      level: 'Level',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      source: 'Source',
      startTime: 'StartTime',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertName: 'string',
      alertTitle: 'string',
      alertType: 'string',
      alertUuid: 'string',
      assetId: 'string',
      assetName: 'string',
      currentPage: 'number',
      endTime: 'number',
      entityId: 'string',
      entityName: 'string',
      isDefend: 'string',
      labelType: 'string',
      level: { 'type': 'array', 'itemType': 'string' },
      pageSize: 'number',
      regionId: 'string',
      roleFor: 'number',
      roleType: 'number',
      source: 'string',
      startTime: 'number',
      subUserId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.level)) {
      $dara.Model.validateArray(this.level);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

