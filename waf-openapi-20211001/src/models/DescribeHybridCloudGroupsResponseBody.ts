// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudGroupsResponseBodyGroups extends $dara.Model {
  /**
   * @remarks
   * The back-to-origin mark of the protected cluster. The value is in the {ISP name}-{Continent name}-{City name}-{Back-to-origin identifier} format. The back-to-origin identifier is optional.
   * 
   * >  For more information about ISP names, continent names, city names, and back-to-origin identifiers, see the following sections.
   * 
   * @example
   * aliyun-asiapacific-beijing-12345678
   */
  backSourceMark?: string;
  /**
   * @remarks
   * The continent code of the protected cluster.
   * 
   * >  For more information about continent codes, see Continent codes in this topic.
   * 
   * @example
   * 410
   */
  continentsValue?: number;
  /**
   * @remarks
   * The ID of the node group.
   * 
   * @example
   * 123
   */
  groupId?: number;
  /**
   * @remarks
   * The name of the node group.
   * 
   * @example
   * StorageGroup
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the node group. Valid values:
   * 
   * *   **protect**
   * *   **control**
   * *   **storage**
   * *   **controlStorage**
   * 
   * @example
   * protect
   */
  groupType?: string;
  /**
   * @remarks
   * The IP address of the server used for load balancing.
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
   * The ISP code of the protected cluster.
   * 
   * >  For more information about ISP codes, see ISP codes in this topic.
   * 
   * @example
   * 0
   */
  operatorValue?: number;
  /**
   * @remarks
   * The port that is used by the hybrid cloud cluster. The value of this parameter is a string. If multiple ports are returned, the value is in the **port1,port2,port3** format.
   * 
   * @example
   * 80,9200,20018
   */
  ports?: string;
  /**
   * @remarks
   * The city code of the protected cluster.
   * 
   * >  For more information about city codes, see City codes in this topic.
   * 
   * @example
   * 0
   */
  regionCodeValue?: number;
  /**
   * @remarks
   * The description of the node group.
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
   * The node groups.
   */
  groups?: DescribeHybridCloudGroupsResponseBodyGroups[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 045660E7-C4C6-5CD7-8182-7B337D95****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
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

