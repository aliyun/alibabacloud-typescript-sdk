// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyProjectAuthorizationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the project authorization to modify.
   * > You can call the ListProjectAuthorizations operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  authorizationId?: number;
  /**
   * @remarks
   * The new description of the project authorization.
   * 
   * @example
   * demo
   */
  description?: string;
  /**
   * @remarks
   * The ID of the bastion host instance.
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The new name of the project authorization.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The region ID of the bastion host.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The scope of manageable assets associated with the authorization after modification. Valid values:
   * 
   * - **1**: All projects.
   * 
   * - **2**: Specified projects.
   * 
   * @example
   * 1
   */
  scopeType?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationId: 'AuthorizationId',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      regionId: 'RegionId',
      scopeType: 'ScopeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationId: 'number',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      regionId: 'string',
      scopeType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

