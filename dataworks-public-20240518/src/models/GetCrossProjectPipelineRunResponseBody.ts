// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCrossProjectPipelineRunResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1788739260000
   */
  abolishTime?: number;
  /**
   * @example
   * operator
   */
  abolisher?: string;
  /**
   * @example
   * ADD
   */
  changeType?: string;
  /**
   * @example
   * 1788739200000
   */
  createTime?: number;
  /**
   * @example
   * creator
   */
  creator?: string;
  /**
   * @example
   * 101
   */
  deploymentEnvironmentId?: number;
  /**
   * @example
   * 将源项目已发布的对象发布到目标项目
   */
  description?: string;
  /**
   * @example
   * DeploymentFailed
   */
  errorCode?: string;
  /**
   * @example
   * Deployment failed
   */
  errorMessage?: string;
  /**
   * @example
   * 1788739260000
   */
  executeTime?: number;
  /**
   * @example
   * executor
   */
  executor?: string;
  /**
   * @example
   * 1788739320000
   */
  finishTime?: number;
  /**
   * @example
   * 1
   */
  objectId?: string;
  /**
   * @example
   * object-1
   */
  objectName?: string;
  /**
   * @example
   * ODPS_SQL
   */
  objectType?: string;
  /**
   * @example
   * 7
   */
  objectVersion?: string;
  /**
   * @example
   * fcfd4160-e2ff-4603-9719-09128fe733df
   */
  pipelineRunId?: string;
  /**
   * @example
   * 735894D1-D5E5-50B8-8A6D-041C90A98B23
   */
  requestId?: string;
  /**
   * @example
   * Ready
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      abolishTime: 'AbolishTime',
      abolisher: 'Abolisher',
      changeType: 'ChangeType',
      createTime: 'CreateTime',
      creator: 'Creator',
      deploymentEnvironmentId: 'DeploymentEnvironmentId',
      description: 'Description',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      executeTime: 'ExecuteTime',
      executor: 'Executor',
      finishTime: 'FinishTime',
      objectId: 'ObjectId',
      objectName: 'ObjectName',
      objectType: 'ObjectType',
      objectVersion: 'ObjectVersion',
      pipelineRunId: 'PipelineRunId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abolishTime: 'number',
      abolisher: 'string',
      changeType: 'string',
      createTime: 'number',
      creator: 'string',
      deploymentEnvironmentId: 'number',
      description: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      executeTime: 'number',
      executor: 'string',
      finishTime: 'number',
      objectId: 'string',
      objectName: 'string',
      objectType: 'string',
      objectVersion: 'string',
      pipelineRunId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCrossProjectPipelineRunResponseBody extends $dara.Model {
  /**
   * @example
   * {"RequestId":"735894D1-D5E5-50B8-8A6D-041C90A98B23","PipelineRunId":"fcfd4160-e2ff-4603-9719-09128fe733df","DeploymentEnvironmentId":101,"ObjectId":"1","ObjectType":"ODPS_SQL","ObjectName":"object-1","ObjectVersion":"7","ChangeType":"ADD","Status":"Ready","Description":"将源项目已发布的对象发布到目标项目","Creator":"creator","CreateTime":1788739200000}
   */
  data?: GetCrossProjectPipelineRunResponseBodyData;
  /**
   * @example
   * 735894D1-D5E5-50B8-8A6D-041C90A98B23
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetCrossProjectPipelineRunResponseBodyData,
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

