// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachProjectsToProjectAuthorizationRequest extends $dara.Model {
  /**
   * @remarks
   * The project authorization ID.
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
   * The instance ID of the bastion host.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The array of IDs of the projects that can be managed.
   * > You can call the ListProjects operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1,2
   */
  projectIds?: string;
  /**
   * @remarks
   * The region ID of the bastion host.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationId: 'AuthorizationId',
      instanceId: 'InstanceId',
      projectIds: 'ProjectIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationId: 'number',
      instanceId: 'string',
      projectIds: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

