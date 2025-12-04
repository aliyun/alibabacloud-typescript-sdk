// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListElasticNetworkInterfacesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key-test
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * key-value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListElasticNetworkInterfacesRequest extends $dara.Model {
  /**
   * @remarks
   * Lingjun Elastic Network Interface ID
   * 
   * @example
   * leni-1234****
   */
  elasticNetworkInterfaceId?: string;
  /**
   * @remarks
   * The IP address of the BE cluster.
   * 
   * @example
   * 10.0.0.1
   */
  ip?: string;
  /**
   * @remarks
   * The network type.
   * 
   * Valid value:
   * 
   * *   Tenant: Tenant.
   * *   VPC
   * 
   * @example
   * tenant
   */
  networkType?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * e01-cn-lbj3aej****
   */
  nodeId?: string;
  /**
   * @remarks
   * The page number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzmcpv7odnta
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the enterprise-level snapshot policy.
   * 
   * Valid value:
   * 
   * *   Create Failed: the creation failure.
   * *   Delete Failed: the that failed to be deleted.
   * *   Executing
   * *   Available: The template is available.
   * *   Deleting
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * List of Tags
   */
  tag?: ListElasticNetworkInterfacesRequestTag[];
  /**
   * @remarks
   * The type of the variable.
   * 
   * Valid value:
   * 
   * *   CUSTOM: custom type.
   * *   DEFAULT: system type.
   * 
   * @example
   * DEFAULT
   */
  type?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-uf6u8473r84e9****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-uf6aa4ddo97fr****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-wulanchabu-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticNetworkInterfaceId: 'ElasticNetworkInterfaceId',
      ip: 'Ip',
      networkType: 'NetworkType',
      nodeId: 'NodeId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tag: 'Tag',
      type: 'Type',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticNetworkInterfaceId: 'string',
      ip: 'string',
      networkType: 'string',
      nodeId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': ListElasticNetworkInterfacesRequestTag },
      type: 'string',
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

