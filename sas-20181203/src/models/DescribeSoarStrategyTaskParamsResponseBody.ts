// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSoarStrategyTaskParamsResponseBodyTaskDetail extends $dara.Model {
  /**
   * @remarks
   * The task parameters.
   * 
   * @example
   * {"summary":[{"name":"email","type":"String","isRequired":false,"fromProperty":"notifyConfig.email"}]}
   */
  params?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * task1
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'Params',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarStrategyTaskParamsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique ID for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * ACF97412-FD09-4D1F-994F-34DF12BR****
   */
  requestId?: string;
  /**
   * @remarks
   * The task details.
   */
  taskDetail?: DescribeSoarStrategyTaskParamsResponseBodyTaskDetail;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskDetail: 'TaskDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskDetail: DescribeSoarStrategyTaskParamsResponseBodyTaskDetail,
    };
  }

  validate() {
    if(this.taskDetail && typeof (this.taskDetail as any).validate === 'function') {
      (this.taskDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

