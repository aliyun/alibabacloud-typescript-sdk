// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateElasticNetworkInterfaceRequestTag } from "./CreateElasticNetworkInterfaceRequestTag";


export class CreateElasticNetworkInterfaceRequest extends $dara.Model {
  /**
   * @remarks
   * The POP API is not ignored by default and is used for idempotence.
   * 
   * @example
   * 3fd79d62-ab1d-11ec-9a53-0242ac110004
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the response code.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * Whether to enable the jumbo frame capability
   * 
   * @example
   * True
   */
  enableJumboFrame?: boolean;
  /**
   * @remarks
   * The ID of the Lingjun node.
   * 
   * @example
   * e01-cn-lbj3aej****
   */
  nodeId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The Resource GroupId.
   * 
   * @example
   * rg-acfmxhucx5ewuwy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-wz9fj2s3o21nw2****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The resource tags.
   */
  tag?: CreateElasticNetworkInterfaceRequestTag[];
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-t4nahb0pxck****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * >  If the NodeId parameter is empty, the VpcId parameter is required. If the NodeId parameter is not empty, the VpcId parameter is optional.
   * 
   * @example
   * vpc-uf6aa4ddo97fr****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      enableJumboFrame: 'EnableJumboFrame',
      nodeId: 'NodeId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      enableJumboFrame: 'boolean',
      nodeId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateElasticNetworkInterfaceRequestTag },
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
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

