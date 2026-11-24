// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteLogQueryRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1733269771123
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to pack non-standard fields into the extend_content field. Valid values:
   * - enabled: Enabled.
   * - disabled: Disabled.
   * 
   * @example
   * enabled
   */
  extendContentPacked?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English. This parameter is actually required. If it is not provided, the service returns a 400 error. Explicitly specify zh or en.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The log query conditions.
   * 
   * @example
   * {\\"alert_level\\":[\\"5\\",\\"4\\",\\"3\\",\\"2\\",\\"1\\"]}
   */
  logCondition?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project. This parameter is required when executing a log query.
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
   * The ID of the log storage region. This parameter is actually required when you execute a log query.
   * 
   * @example
   * cn-hangzhou
   */
  logRegionId?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project. This parameter is required when executing a log query.
   * 
   * @example
   * huawei-cn-cfw
   */
  logStoreName?: string;
  /**
   * @remarks
   * The ID of the user for data ingestion.
   * 
   * @example
   * 173326*******
   */
  logUserId?: number;
  /**
   * @remarks
   * The normalization schema ID. This parameter is required if packing is enabled.
   * 
   * @example
   * WAF_ALERT_ACTIVITY
   */
  normalizationSchemaId?: string;
  /**
   * @remarks
   * The region where the data management center of Threat Analysis is located. Select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: Assets are located in the Chinese mainland.
   * - ap-southeast-1: Assets are located outside the Chinese mainland.
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
   * 173326*******
   */
  roleFor?: number;
  /**
   * @remarks
   * The start time. The value is a UNIX timestamp in milliseconds.
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

