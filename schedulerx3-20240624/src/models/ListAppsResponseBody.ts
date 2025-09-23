// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppsResponseBodyDataRecords extends $dara.Model {
  /**
   * @remarks
   * AccessToken
   * 
   * @example
   * 2f4ddeab8e344ed68e0402cf9b8502ffv3
   */
  accessToken?: string;
  /**
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @example
   * 1
   */
  appType?: number;
  /**
   * @example
   * 1827811800555555
   */
  creator?: string;
  /**
   * @example
   * true
   */
  enableLog?: boolean;
  /**
   * @example
   * 1
   */
  executorNum?: number;
  /**
   * @example
   * 43885
   */
  id?: number;
  /**
   * @example
   * 10
   */
  jobNum?: number;
  labelRouteStrategy?: number;
  /**
   * @example
   * http://28.5.128.3:80
   */
  leader?: string;
  /**
   * @example
   * 100
   */
  maxConcurrency?: number;
  /**
   * @example
   * 1000
   */
  maxJobs?: number;
  title?: string;
  /**
   * @example
   * 1827811800555555
   */
  updater?: string;
  /**
   * @example
   * k8s_service
   */
  workerRegistry?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      appName: 'AppName',
      appType: 'AppType',
      creator: 'Creator',
      enableLog: 'EnableLog',
      executorNum: 'ExecutorNum',
      id: 'Id',
      jobNum: 'JobNum',
      labelRouteStrategy: 'LabelRouteStrategy',
      leader: 'Leader',
      maxConcurrency: 'MaxConcurrency',
      maxJobs: 'MaxJobs',
      title: 'Title',
      updater: 'Updater',
      workerRegistry: 'WorkerRegistry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      appName: 'string',
      appType: 'number',
      creator: 'string',
      enableLog: 'boolean',
      executorNum: 'number',
      id: 'number',
      jobNum: 'number',
      labelRouteStrategy: 'number',
      leader: 'string',
      maxConcurrency: 'number',
      maxJobs: 'number',
      title: 'string',
      updater: 'string',
      workerRegistry: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * -
   */
  records?: ListAppsResponseBodyDataRecords[];
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      records: 'Records',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      records: { 'type': 'array', 'itemType': ListAppsResponseBodyDataRecords },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAppsResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: ListAppsResponseBodyData;
  /**
   * @example
   * Parameter error: content is null.
   */
  message?: string;
  /**
   * @example
   * 2C3E52FF-CBE9-5C0E-8252-37ACFF1F5EFF
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ListAppsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

