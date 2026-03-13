// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserAliUidByInstanceIdResponseBody extends $dara.Model {
  applicationId?: string;
  applicationName?: string;
  code?: string;
  cpus?: number;
  createTime?: number;
  intranetIp?: string;
  memory?: number;
  message?: string;
  namespaceId?: string;
  podName?: string;
  podUid?: string;
  requestId?: string;
  resouceType?: string;
  resourceInstanceId?: string;
  status?: string;
  updateTime?: number;
  userUid?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
      code: 'Code',
      cpus: 'Cpus',
      createTime: 'CreateTime',
      intranetIp: 'IntranetIp',
      memory: 'Memory',
      message: 'Message',
      namespaceId: 'NamespaceId',
      podName: 'PodName',
      podUid: 'PodUid',
      requestId: 'RequestId',
      resouceType: 'ResouceType',
      resourceInstanceId: 'ResourceInstanceId',
      status: 'Status',
      updateTime: 'UpdateTime',
      userUid: 'UserUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationName: 'string',
      code: 'string',
      cpus: 'number',
      createTime: 'number',
      intranetIp: 'string',
      memory: 'number',
      message: 'string',
      namespaceId: 'string',
      podName: 'string',
      podUid: 'string',
      requestId: 'string',
      resouceType: 'string',
      resourceInstanceId: 'string',
      status: 'string',
      updateTime: 'number',
      userUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

