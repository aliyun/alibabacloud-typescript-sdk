// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * AccessToken。
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
   * 18582193685027xx
   */
  creator?: string;
  /**
   * @example
   * true
   */
  enableLog?: boolean;
  /**
   * @example
   * 2
   */
  executorNum?: number;
  /**
   * @example
   * 3402
   */
  id?: number;
  /**
   * @example
   * 100
   */
  jobNum?: number;
  labelRouteStrategy?: number;
  /**
   * @example
   * http://28.***.***.3:80
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
   * 18582193685027xx
   */
  updater?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      appName: 'AppName',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      appName: 'string',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: GetAppResponseBodyData;
  /**
   * @example
   * Not found: appName not found.
   */
  message?: string;
  /**
   * @example
   * D0DE9C33-992A-580B-89C4-B609A292748D
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
      data: GetAppResponseBodyData,
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

