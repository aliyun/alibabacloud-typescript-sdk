// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateVirtualNodeRequestTag } from "./UpdateVirtualNodeRequestTag";


export class UpdateVirtualNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotency of requests?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The IP address of the DNS server. If `dnsPolicy=ClusterFirst` is configured for the Elastic Container Instance pod, Elastic Container Instance uses the configuration to provide DNS services to containers. You can configure multiple IP addresses. Separate multiple IP addresses with commas (,).
   * 
   * @example
   * 100.1.XX.XX
   */
  clusterDNS?: string;
  /**
   * @remarks
   * The domain name of the cluster. If this parameter is specified, in addition to the search domain of the host, Kubelet configures all containers to search for the specified domain name.
   * 
   * @example
   * example.com
   */
  clusterDomain?: string;
  /**
   * @remarks
   * The custom resources that are supported by the virtual node. If a custom resource is specified in the request of an Elastic Container Instance pod, the pod is scheduled to run on the virtual node that supports the custom resource. You can use the `Resource name = Number of resources` format to specify custom resources. Separate multiple resources with commas (,).
   * 
   * @example
   * example1.com=100,example2.com=200
   */
  customResources?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the virtual node.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags to add to the virtual node.
   */
  tag?: UpdateVirtualNodeRequestTag[];
  /**
   * @remarks
   * The ID of the virtual node.
   * 
   * This parameter is required.
   * 
   * @example
   * vnd-2ze960zkdqrldeaw****
   */
  virtualNodeId?: string;
  /**
   * @remarks
   * The name of the virtual node.
   * 
   * @example
   * testNode
   */
  virtualNodeName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      clusterDNS: 'ClusterDNS',
      clusterDomain: 'ClusterDomain',
      customResources: 'CustomResources',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
      virtualNodeId: 'VirtualNodeId',
      virtualNodeName: 'VirtualNodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      clusterDNS: 'string',
      clusterDomain: 'string',
      customResources: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': UpdateVirtualNodeRequestTag },
      virtualNodeId: 'string',
      virtualNodeName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

