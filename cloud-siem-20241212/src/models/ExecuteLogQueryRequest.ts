// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteLogQueryRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. The value is a UNIX timestamp in milliseconds (ms).
   * 
   * @example
   * 1733269771123
   */
  endTime?: string;
  /**
   * @remarks
   * Specifies whether to pack non-standard fields into the extended field extend_content. Valid values:
   * - enabled: Enabled.
   * - disabled: Disabled.
   * 
   * @example
   * enabled
   */
  extendContentPacked?: string;
  /**
   * @remarks
   * The language of the response messages. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English. This parameter is required. If not specified, the service returns a 400 error. Explicitly set this parameter to zh or en.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The log query condition.
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
   * The ID of the log storage region. This parameter is required when executing a log query.
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
   * The user ID for data access.
   * 
   * @example
   * 173326*******
   */
  logUserId?: number;
  /**
   * @remarks
   * The NormalizationSchemaId to specify if packing is enabled.
   * 
   * @example
   * WAF_ALERT_ACTIVITY
   */
  normalizationSchemaId?: string;
  /**
   * @remarks
   * The region where the data management center of the threat analysis feature is located. Select the management center region based on the region where your assets reside. Valid values:
   * - cn-hangzhou: Assets are located in the Chinese mainland.
   * - ap-southeast-1: Assets are located outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of the member account that the administrator switches to.
   * 
   * @example
   * 173326*******
   */
  roleFor?: number;
  /**
   * @remarks
   * The start time. The value is a UNIX timestamp in milliseconds (ms).
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

