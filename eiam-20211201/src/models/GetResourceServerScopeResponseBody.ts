// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceServerScopeResponseBodyResourceServerScope extends $dara.Model {
  /**
   * @remarks
   * IDaaS EIAM 应用Id
   * 
   * @example
   * app_xxxxxxxxxxx
   */
  applicationId?: string;
  /**
   * @example
   * authorize_required
   */
  authorizationType?: string;
  /**
   * @remarks
   * IDaaS EIAM 实例Id
   * 
   * @example
   * idaas_xxxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * IDaaS EIAM ResourceServer下权限Id
   * 
   * @example
   * rss_xxxxxxxxxxx
   */
  resourceServerScopeId?: string;
  /**
   * @remarks
   * IDaaS EIAM ResourceServer下权限名称
   * 
   * @example
   * 读取全部用户
   */
  resourceServerScopeName?: string;
  /**
   * @remarks
   * IDaaS EIAM ResourceServer下权限类型
   * 
   * @example
   * urn:alibaba:idaas:resourceserver:scope:delegated
   */
  resourceServerScopeType?: string;
  /**
   * @remarks
   * IDaaS EIAM ResourceServer下权限值
   * 
   * @example
   * User:Read:ALL
   */
  resourceServerScopeValue?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      authorizationType: 'AuthorizationType',
      instanceId: 'InstanceId',
      resourceServerScopeId: 'ResourceServerScopeId',
      resourceServerScopeName: 'ResourceServerScopeName',
      resourceServerScopeType: 'ResourceServerScopeType',
      resourceServerScopeValue: 'ResourceServerScopeValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      authorizationType: 'string',
      instanceId: 'string',
      resourceServerScopeId: 'string',
      resourceServerScopeName: 'string',
      resourceServerScopeType: 'string',
      resourceServerScopeValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceServerScopeResponseBody extends $dara.Model {
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  resourceServerScope?: GetResourceServerScopeResponseBodyResourceServerScope;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceServerScope: 'ResourceServerScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceServerScope: GetResourceServerScopeResponseBodyResourceServerScope,
    };
  }

  validate() {
    if(this.resourceServerScope && typeof (this.resourceServerScope as any).validate === 'function') {
      (this.resourceServerScope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

