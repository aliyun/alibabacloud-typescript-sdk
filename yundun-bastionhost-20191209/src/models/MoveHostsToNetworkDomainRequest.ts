// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveHostsToNetworkDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the hosts that you want to add to the network domain.
   * 
   * This parameter is required.
   */
  hostIds?: string[];
  /**
   * @remarks
   * The bastion host ID.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the bastion host ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-uax2zmx8005
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the network domain to which you want to add hosts.
   * 
   * >  You can call the [ListNetworkDomains](https://help.aliyun.com/document_detail/2758827.html) operation to query the network domain ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  networkDomainId?: string;
  /**
   * @remarks
   * The region ID of the bastion host.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      hostIds: 'HostIds',
      instanceId: 'InstanceId',
      networkDomainId: 'NetworkDomainId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      networkDomainId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hostIds)) {
      $dara.Model.validateArray(this.hostIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

