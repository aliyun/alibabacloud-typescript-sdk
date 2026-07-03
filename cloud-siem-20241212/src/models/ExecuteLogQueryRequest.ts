// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteLogQueryRequest extends $dara.Model {
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 1733269771123
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to pack non-standard fields into the extension field extend_content. Valid values:
   * - enabled: Enabled.
   * - disabled: Disabled.
   * 
   * @example
   * enabled
   */
  extendContentPacked?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  logCondition?: string;
  /**
   * @remarks
   * The Simple Log Service project name.
   * 
   * @example
   * slsaudit-center-173326*******-cn-hangzhou
   */
  logProjectName?: string;
  /**
   * @remarks
   * The Simple Log Service query statement.
   * 
   * @example
   * *
   */
  logQuery?: string;
  /**
   * @remarks
   * The log storage region ID.
   * 
   * @example
   * cn-hangzhou
   */
  logRegionId?: string;
  /**
   * @remarks
   * The Simple Log Service project name.
   * 
   * @example
   * huawei-cn-cfw
   */
  logStoreName?: string;
  /**
   * @remarks
   * The user ID for data access.
   * 
   * @example
   * 173326*******
   */
  logUserId?: number;
  /**
   * @remarks
   * If packing is enabled, you must specify NormalizationSchemaId.
   * 
   * @example
   * WAF_ALERT_ACTIVITY
   */
  normalizationSchemaId?: string;
  /**
   * @remarks
   * The region where the threat analysis data management center is located. Specify the management center based on the region of your assets. Valid values:
   * - cn-hangzhou: the asset is in the Chinese mainland.
   * - ap-southeast-1: the asset is outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member to which the administrator switches the view.
   * 
   * @example
   * 173326*******
   */
  roleFor?: number;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1733269771123
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      extendContentPacked: 'ExtendContentPacked',
      lang: 'Lang',
      logCondition: 'LogCondition',
      logProjectName: 'LogProjectName',
      logQuery: 'LogQuery',
      logRegionId: 'LogRegionId',
      logStoreName: 'LogStoreName',
      logUserId: 'LogUserId',
      normalizationSchemaId: 'NormalizationSchemaId',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      extendContentPacked: 'string',
      lang: 'string',
      logCondition: 'string',
      logProjectName: 'string',
      logQuery: 'string',
      logRegionId: 'string',
      logStoreName: 'string',
      logUserId: 'number',
      normalizationSchemaId: 'string',
      regionId: 'string',
      roleFor: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

