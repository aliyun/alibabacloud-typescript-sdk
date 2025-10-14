// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteLogQueryRequest extends $dara.Model {
  /**
   * @example
   * 1733269771123。
   */
  endTime?: string;
  extendContentPacked?: string;
  /**
   * @example
   * zh。
   */
  lang?: string;
  /**
   * @example
   * slsaudit-center-173326*******-cn-hangzhou
   */
  logProjectName?: string;
  /**
   * @example
   * *
   */
  logQuery?: string;
  /**
   * @example
   * cn-hangzhou。
   */
  logRegionId?: string;
  /**
   * @example
   * huawei-cn-cfw
   */
  logStoreName?: string;
  /**
   * @example
   * 173326*******。
   */
  logUserId?: number;
  normalizationSchemaId?: string;
  /**
   * @example
   * cn-hangzhou。
   */
  regionId?: string;
  /**
   * @example
   * 173326*******。
   */
  roleFor?: number;
  /**
   * @example
   * 1733269771123。
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      extendContentPacked: 'ExtendContentPacked',
      lang: 'Lang',
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

