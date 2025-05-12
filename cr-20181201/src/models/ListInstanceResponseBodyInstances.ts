// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstanceResponseBodyInstancesTags } from "./ListInstanceResponseBodyInstancesTags";


export class ListInstanceResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 1562849679000
   */
  createTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * cri-sgedpenzw80e****
   */
  instanceId?: string;
  /**
   * @remarks
   * The issue occurs on the instance.
   * 
   * @example
   * oss bucket already exists
   */
  instanceIssue?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The edition of the Container Registry Enterprise Edition instance.
   * 
   * @example
   * Enterprise_Basic
   */
  instanceSpecification?: string;
  /**
   * @remarks
   * The status of the instance.
   * 
   * @example
   * RUNNING
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The time when the instance was last modified.
   * 
   * @example
   * 1562849760000
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-aek2h3aexpy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the instance.
   */
  tags?: ListInstanceResponseBodyInstancesTags[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      instanceIssue: 'InstanceIssue',
      instanceName: 'InstanceName',
      instanceSpecification: 'InstanceSpecification',
      instanceStatus: 'InstanceStatus',
      modifiedTime: 'ModifiedTime',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      instanceId: 'string',
      instanceIssue: 'string',
      instanceName: 'string',
      instanceSpecification: 'string',
      instanceStatus: 'string',
      modifiedTime: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': ListInstanceResponseBodyInstancesTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

