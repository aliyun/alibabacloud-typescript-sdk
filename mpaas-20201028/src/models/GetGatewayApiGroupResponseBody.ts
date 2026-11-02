// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayApiGroupResponseBodyApiGroup extends $dara.Model {
  centers?: { [key: string]: any };
  description?: string;
  domainName?: string;
  enableMTLS?: boolean;
  groupId?: number;
  groupName?: string;
  host?: string;
  httpsModel?: boolean;
  instanceId?: string;
  instancePort?: number;
  regionMode?: boolean;
  timeout?: number;
  upstreamType?: string;
  vpcId?: string;
  vpcModel?: boolean;
  static names(): { [key: string]: string } {
    return {
      centers: 'Centers',
      description: 'Description',
      domainName: 'DomainName',
      enableMTLS: 'EnableMTLS',
      groupId: 'GroupId',
      groupName: 'GroupName',
      host: 'Host',
      httpsModel: 'HttpsModel',
      instanceId: 'InstanceId',
      instancePort: 'InstancePort',
      regionMode: 'RegionMode',
      timeout: 'Timeout',
      upstreamType: 'UpstreamType',
      vpcId: 'VpcId',
      vpcModel: 'VpcModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centers: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      description: 'string',
      domainName: 'string',
      enableMTLS: 'boolean',
      groupId: 'number',
      groupName: 'string',
      host: 'string',
      httpsModel: 'boolean',
      instanceId: 'string',
      instancePort: 'number',
      regionMode: 'boolean',
      timeout: 'number',
      upstreamType: 'string',
      vpcId: 'string',
      vpcModel: 'boolean',
    };
  }

  validate() {
    if(this.centers) {
      $dara.Model.validateMap(this.centers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayApiGroupResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  apiGroup?: GetGatewayApiGroupResponseBodyApiGroup;
  errorField?: string;
  httpStatusCode?: number;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      apiGroup: 'ApiGroup',
      errorField: 'ErrorField',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      apiGroup: GetGatewayApiGroupResponseBodyApiGroup,
      errorField: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.apiGroup && typeof (this.apiGroup as any).validate === 'function') {
      (this.apiGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

