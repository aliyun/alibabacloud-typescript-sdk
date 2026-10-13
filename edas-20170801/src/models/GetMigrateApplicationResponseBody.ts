// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMigrateApplicationResponseBodyDataResultExtraInfo extends $dara.Model {
  /**
   * @remarks
   * appJsonFile
   * 
   * @example
   * "https://edas-hz-secure.oss-cn-hangzhou.aliyuncs.com/edas-app-migration/1057288613002791/e7c2e7d9-5e87-46a2-99e9-2be0b577a3fd/edas-app.json?Expires=1791517039&OSSAccessKeyId=LTAIWLbjtAGvdMWX&Signature=HyZ2b3u5mlP56T8QgkARwWE5cQc%3D"
   */
  appJsonFile?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * “”
   */
  errorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      appJsonFile: 'appJsonFile',
      errorMsg: 'errorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appJsonFile: 'string',
      errorMsg: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMigrateApplicationResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The detailed status of the application.
   * 
   * @example
   * "{\\"a259bc63-c1f4-48ba-89b1-d6a4591e946c\\":{\\"app_name\\":\\"prodoam1\\",\\"cluster_name\\":\\"hthoamtest\\",\\"cluster_id\\":\\"f68945a8-47af-4644-a951-0486d674f26e\\",\\"error_msg\\":\\"\\",\\"is_multilingual_app\\":false,\\"state\\":\\"success\\",\\"clusterId\\":\\"f68945a8-47af-4644-a951-0486d674f26e\\",\\"app_id\\":\\"a259bc63-c1f4-48ba-89b1-d6a4591e946c\\",\\"logical_region_id\\":\\"cn-hangzhou\\",\\"k8sNamespace\\":\\"default\\"},\\"c5a258ac-f02d-4035-b59f-cd7f4a34156a\\":{\\"app_name\\":\\"testoam1\\",\\"cluster_name\\":\\"hthoamtest\\",\\"cluster_id\\":\\"f68945a8-47af-4644-a951-0486d674f26e\\",\\"error_msg\\":\\"\\",\\"is_multilingual_app\\":false,\\"state\\":\\"success\\",\\"clusterId\\":\\"f68945a8-47af-4644-a951-0486d674f26e\\",\\"app_id\\":\\"c5a258ac-f02d-4035-b59f-cd7f4a34156a\\",\\"logical_region_id\\":\\"cn-hangzhou\\",\\"k8sNamespace\\":\\"default\\"},\\"d132c827-db2f-444e-bc9e-9182d8112806\\":{\\"app_name\\":\\"oam1\\",\\"cluster_name\\":\\"hthoamtest\\",\\"cluster_id\\":\\"f68945a8-47af-4644-a951-0486d674f26e\\",\\"error_msg\\":\\"\\",\\"is_multilingual_app\\":false,\\"state\\":\\"success\\",\\"clusterId\\":\\"f68945a8-47af-4644-a951-0486d674f26e\\",\\"app_id\\":\\"d132c827-db2f-444e-bc9e-9182d8112806\\",\\"logical_region_id\\":\\"cn-hangzhou\\",\\"k8sNamespace\\":\\"default\\"}}"
   */
  appDetailState?: string;
  /**
   * @remarks
   * Indicates whether binary resources are cleaned up. Valid values: 0: not cleaned up. 1: cleaned up.
   * 
   * @example
   * 1
   */
  binaryCleaned?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1791512615778
   */
  createTime?: number;
  /**
   * @remarks
   * The additional information.
   */
  extraInfo?: GetMigrateApplicationResponseBodyDataResultExtraInfo;
  /**
   * @remarks
   * The migration ID.
   * 
   * @example
   * "e7c2e7d9-5e87-46a2-99e9-2be0b577a3fd"
   */
  migrationId?: string;
  /**
   * @remarks
   * The operation type of the migration task. Valid values: 1: import. 2: export. 3: clone.
   * 
   * @example
   * 2
   */
  migrationType?: number;
  /**
   * @remarks
   * The executor.
   * 
   * @example
   * lvwan
   */
  owner?: string;
  /**
   * @remarks
   * regionId
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The application migration status. Valid values: failed: Failed. finished: Succeeded.
   * 
   * @example
   * finished
   */
  state?: string;
  /**
   * @remarks
   * The task progress percentage, stored as a floating-point number. For example, if the API returns 0.33, the progress bar displays 33%.
   * 
   * @example
   * 0.33
   */
  statePercent?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1791512615778
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      appDetailState: 'appDetailState',
      binaryCleaned: 'binaryCleaned',
      createTime: 'createTime',
      extraInfo: 'extraInfo',
      migrationId: 'migrationId',
      migrationType: 'migrationType',
      owner: 'owner',
      regionId: 'regionId',
      state: 'state',
      statePercent: 'statePercent',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDetailState: 'string',
      binaryCleaned: 'number',
      createTime: 'number',
      extraInfo: GetMigrateApplicationResponseBodyDataResultExtraInfo,
      migrationId: 'string',
      migrationType: 'number',
      owner: 'string',
      regionId: 'string',
      state: 'string',
      statePercent: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(this.extraInfo && typeof (this.extraInfo as any).validate === 'function') {
      (this.extraInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMigrateApplicationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 4
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of results.
   */
  result?: GetMigrateApplicationResponseBodyDataResult[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      pageSize: 'pageSize',
      result: 'result',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': GetMigrateApplicationResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMigrateApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  data?: GetMigrateApplicationResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * “”
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID.
   * 
   * @example
   * 3b52155517851187240212426d0099
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetMigrateApplicationResponseBodyData,
      message: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

