// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResourceServerScopeRequest extends $dara.Model {
  /**
   * @remarks
   * IDaaS的应用资源ID。
   * 
   * This parameter is required.
   * 
   * @example
   * app_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  applicationId?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * ResourceServer下Scope唯一标识。
   * 
   * This parameter is required.
   * 
   * @example
   * ress_neg35flu6byysxwutaxu3dxxxx
   */
  resourceServerScopeId?: string;
  /**
   * @remarks
   * 权限名称
   * 
   * This parameter is required.
   * 
   * @example
   * Read All User
   */
  resourceServerScopeName?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      instanceId: 'InstanceId',
      resourceServerScopeId: 'ResourceServerScopeId',
      resourceServerScopeName: 'ResourceServerScopeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      instanceId: 'string',
      resourceServerScopeId: 'string',
      resourceServerScopeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

