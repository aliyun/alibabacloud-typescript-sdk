// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEiamInstancesResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * instance test
   */
  description?: string;
  /**
   * @remarks
   * The private domain name of the instance Developer API.
   * 
   * @example
   * eiam-developerapi-cn.vpc-proxy.aliyuncs.com
   */
  developerAPIPrivateDomain?: string;
  /**
   * @remarks
   * The public domain of the instance Developer API.
   * 
   * @example
   * eiam-developerapi.cn-hangzhou.aliyuncs.com
   */
  developerAPIPublicDomain?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_eypq6ljgyeuwmlw672sulxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * @example
   * RUNNING
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The instance version.
   * 
   * Valid values:
   * 
   * *   EIAM 2.0
   * *   EIAM 1.0
   * 
   * @example
   * EIAM 2.0
   */
  instanceVersion?: string;
  /**
   * @remarks
   * The private domain of the instance OpenAPI.
   * 
   * @example
   * eiam-cn.vpc-proxy.aliyuncs.com
   */
  openAPIPrivateDomain?: string;
  /**
   * @remarks
   * The public domain of the instance OpenAPI.
   * 
   * @example
   * eiam.cn-hangzhou.aliyuncs.com
   */
  openAPIPublicDomain?: string;
  /**
   * @remarks
   * The single sign-on (SSO) domain  of the instance.
   * 
   * @example
   * xxxx.aliyunidaas.com
   */
  SSODomain?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 1677810869300
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      developerAPIPrivateDomain: 'DeveloperAPIPrivateDomain',
      developerAPIPublicDomain: 'DeveloperAPIPublicDomain',
      instanceId: 'InstanceId',
      instanceStatus: 'InstanceStatus',
      instanceVersion: 'InstanceVersion',
      openAPIPrivateDomain: 'OpenAPIPrivateDomain',
      openAPIPublicDomain: 'OpenAPIPublicDomain',
      SSODomain: 'SSODomain',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      developerAPIPrivateDomain: 'string',
      developerAPIPublicDomain: 'string',
      instanceId: 'string',
      instanceStatus: 'string',
      instanceVersion: 'string',
      openAPIPrivateDomain: 'string',
      openAPIPublicDomain: 'string',
      SSODomain: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEiamInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance list.
   */
  instances?: ListEiamInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListEiamInstancesResponseBodyInstances },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

