// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNetworkDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The bastion host ID.
   * > You can call the [DescribeInstances ](https://help.aliyun.com/document_detail/153281.html)operation to query the bastion host ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-i7m2btk6g48
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the network domain to query.
   * > You can call the [ListNetworkDomains ](https://help.aliyun.com/document_detail/2758827.html)operation to query the network domain ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
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
      instanceId: 'InstanceId',
      networkDomainId: 'NetworkDomainId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      networkDomainId: 'string',
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

