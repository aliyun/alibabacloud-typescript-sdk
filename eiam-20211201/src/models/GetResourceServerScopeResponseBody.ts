// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceServerScopeResponseBodyResourceServerScope extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app_xxxxxxxxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * The authorization type.
   * 
   * @example
   * authorize_required
   */
  authorizationType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * idaas_xxxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the scope permission.
   * 
   * @example
   * rss_xxxxxxxxxxx
   */
  resourceServerScopeId?: string;
  /**
   * @remarks
   * The name of the scope permission.
   * 
   * @example
   * Read User Info
   */
  resourceServerScopeName?: string;
  /**
   * @remarks
   * The type of the scope permission.
   * 
   * @example
   * urn:alibaba:idaas:resourceserver:scope:delegated
   */
  resourceServerScopeType?: string;
  /**
   * @remarks
   * The value of the scope permission.
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
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the scope permission of the resource server.
   */
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

