// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDifyInstancesResponseBodyRootData extends $dara.Model {
  appUuid?: string;
  createdTime?: string;
  edition?: string;
  enterpriseInternetUrl?: string;
  enterpriseIntranetUrl?: string;
  instanceId?: string;
  instanceName?: string;
  internetUrl?: string;
  intranetUrl?: string;
  majorVersion?: string;
  securityGroupId?: string;
  vSwitchId?: string;
  vpcId?: string;
  workspaceId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      appUuid: 'AppUuid',
      createdTime: 'CreatedTime',
      edition: 'Edition',
      enterpriseInternetUrl: 'EnterpriseInternetUrl',
      enterpriseIntranetUrl: 'EnterpriseIntranetUrl',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetUrl: 'InternetUrl',
      intranetUrl: 'IntranetUrl',
      majorVersion: 'MajorVersion',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      workspaceId: 'WorkspaceId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUuid: 'string',
      createdTime: 'string',
      edition: 'string',
      enterpriseInternetUrl: 'string',
      enterpriseIntranetUrl: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetUrl: 'string',
      intranetUrl: 'string',
      majorVersion: 'string',
      securityGroupId: 'string',
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

export class ListDifyInstancesResponseBodyRoot extends $dara.Model {
  data?: ListDifyInstancesResponseBodyRootData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDifyInstancesResponseBodyRootData },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDifyInstancesResponseBody extends $dara.Model {
  code?: string;
  errorCode?: string;
  httpStatusCode?: number;
  maxResults?: number;
  message?: string;
  nextToken?: string;
  requestId?: string;
  root?: ListDifyInstancesResponseBodyRoot;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      root: 'Root',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      root: ListDifyInstancesResponseBodyRoot,
      success: 'boolean',
    };
  }

  validate() {
    if(this.root && typeof (this.root as any).validate === 'function') {
      (this.root as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

