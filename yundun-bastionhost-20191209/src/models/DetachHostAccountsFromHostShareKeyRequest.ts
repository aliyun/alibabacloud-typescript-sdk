// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachHostAccountsFromHostShareKeyRequest extends $dara.Model {
  /**
   * @remarks
   * The list of host account IDs.
   * > You can call [ListHostAccountsForHostShareKey](https://help.aliyun.com/document_detail/462975.html) to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * ["1","2","3"]
   */
  hostAccountIds?: string;
  /**
   * @remarks
   * The ID of the host shared key.
   * > You can call [ListHostShareKeys](https://help.aliyun.com/document_detail/462973.html) to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 11
   */
  hostShareKeyId?: string;
  /**
   * @remarks
   * The instance ID of the bastion host.
   * > You can invoke [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The project ID.
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
  static names(): { [key: string]: string } {
    return {
      hostAccountIds: 'HostAccountIds',
      hostShareKeyId: 'HostShareKeyId',
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostAccountIds: 'string',
      hostShareKeyId: 'string',
      instanceId: 'string',
      projectId: 'number',
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

