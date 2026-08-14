// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHostsProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the hosts that you want to move. This parameter is a JSON-formatted string. You can specify up to 100 host IDs. Separate multiple host IDs with commas (,).
   * > You can call the [ListHosts](https://help.aliyun.com/document_detail/200665.html) operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  hostIds?: string;
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
   * The ID of the project to which the hosts currently belong.
   * 
   * @example
   * 3
   */
  projectId?: number;
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
   * The ID of the target project to which you want to move the hosts.
   * > You can call the ListProjectsForProjectAuthorizationPrincipal operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  targetProjectId?: number;
  static names(): { [key: string]: string } {
    return {
      hostIds: 'HostIds',
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      targetProjectId: 'TargetProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostIds: 'string',
      instanceId: 'string',
      projectId: 'number',
      regionId: 'string',
      targetProjectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

