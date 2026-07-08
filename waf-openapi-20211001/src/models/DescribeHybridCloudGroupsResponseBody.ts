// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudGroupsResponseBodyGroups extends $dara.Model {
  /**
   * @remarks
   * The back-to-origin mark of the protection cluster. The value is in the **{CarrierTag}-{ContinentTag}-{CityTag}-{Identifier}** format. The identifier is optional.
   * 
   * > For a list of valid values, see Additional information about response parameters.
   * 
   * @example
   * aliyun-asiapacific-beijing-56477821
   */
  backSourceMark?: string;
  /**
   * @remarks
   * The continent code of the protection cluster.
   * 
   * > For a list of valid codes, see Additional information about response parameters.
   * 
   * @example
   * 410
   */
  continentsValue?: number;
  /**
   * @remarks
   * The ID of the hybrid cloud node group.
   * 
   * @example
   * 123
   */
  groupId?: number;
  /**
   * @remarks
   * The name of the hybrid cloud node group.
   * 
   * @example
   * StorageGroup
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the hybrid cloud node group. Valid values:
   * 
   * - **protect**: protection node group.
   * 
   * - **control**: control node group.
   * 
   * - **storage**: storage node group.
   * 
   * - **controlStorage**: control and storage node group.
   * 
   * @example
   * protect
   */
  groupType?: string;
  /**
   * @remarks
   * The IP address of the load balancer that is associated with the hybrid cloud node group.
   * 
   * @example
   * 1.1.XX.XX
   */
  loadBalanceIp?: string;
  /**
   * @remarks
   * The ID of the protection node.
   * 
   * @example
   * 1312
   */
  locationId?: number;
  /**
   * @remarks
   * The carrier code of the protection cluster.
   * 
   * > For a list of valid codes, see Additional information about response parameters.
   * 
   * @example
   * 0
   */
  operatorValue?: number;
  /**
   * @remarks
   * The ports that are used by the hybrid cloud cluster. Multiple ports are separated by commas (,).
   * 
   * @example
   * 80,9200,20018
   */
  ports?: string;
  /**
   * @remarks
   * The city code of the protection cluster.
   * 
   * > For a list of valid codes, see Additional information about response parameters.
   * 
   * @example
   * 0
   */
  regionCodeValue?: number;
  /**
   * @remarks
   * The description of the hybrid cloud node group.
   * 
   * @example
   * test
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      backSourceMark: 'BackSourceMark',
      continentsValue: 'ContinentsValue',
      groupId: 'GroupId',
      groupName: 'GroupName',
      groupType: 'GroupType',
      loadBalanceIp: 'LoadBalanceIp',
      locationId: 'LocationId',
      operatorValue: 'OperatorValue',
      ports: 'Ports',
      regionCodeValue: 'RegionCodeValue',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backSourceMark: 'string',
      continentsValue: 'number',
      groupId: 'number',
      groupName: 'string',
      groupType: 'string',
      loadBalanceIp: 'string',
      locationId: 'number',
      operatorValue: 'number',
      ports: 'string',
      regionCodeValue: 'number',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of hybrid cloud node groups.
   */
  groups?: DescribeHybridCloudGroupsResponseBodyGroups[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 045660E7-C4C6-5CD7-8182-7B337D95ADF4
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of hybrid cloud node groups returned.
   * 
   * @example
   * 146
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': DescribeHybridCloudGroupsResponseBodyGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

