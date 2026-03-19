// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDifyInstanceResponseBodyData extends $dara.Model {
  /**
   * @example
   * abc
   */
  appUuid?: string;
  /**
   * @example
   * abc1-def2-ghi3-jkl4
   */
  difyInstanceId?: string;
  /**
   * @example
   * Dify Instance
   */
  difyInstanceName?: string;
  /**
   * @example
   * 291XXX
   */
  instanceId?: string;
  /**
   * @example
   * trScore
   */
  instanceName?: string;
  /**
   * @example
   * 1
   */
  replicas?: number;
  /**
   * @example
   * 4CU
   */
  resourceQuota?: string;
  /**
   * @example
   * sg-uf6hs6f3m6j5gm6jj0we
   */
  securityGroupId?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  /**
   * @example
   * vsw-bp1m5bwgv41nfoi5el6y1
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-xxxx
   */
  vpcId?: string;
  /**
   * @example
   * 863020290155****
   */
  workspaceId?: string;
  /**
   * @example
   * cn-beijing-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      appUuid: 'AppUuid',
      difyInstanceId: 'DifyInstanceId',
      difyInstanceName: 'DifyInstanceName',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      replicas: 'Replicas',
      resourceQuota: 'ResourceQuota',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      workspaceId: 'WorkspaceId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUuid: 'string',
      difyInstanceId: 'string',
      difyInstanceName: 'string',
      instanceId: 'string',
      instanceName: 'string',
      replicas: 'number',
      resourceQuota: 'string',
      securityGroupId: 'string',
      status: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      workspaceId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDifyInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: CreateDifyInstanceResponseBodyData;
  /**
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * UnknownError
   */
  message?: string;
  /**
   * @example
   * ABCF54A2-4D74-5DE1-9F0F-5221DDEDD9AD
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateDifyInstanceResponseBodyData,
      errorCode: 'string',
      httpStatusCode: 'number',
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

