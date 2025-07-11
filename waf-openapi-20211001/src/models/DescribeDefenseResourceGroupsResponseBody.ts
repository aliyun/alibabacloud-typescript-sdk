// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseResourceGroupsResponseBodyGroups extends $dara.Model {
  /**
   * @remarks
   * The description of the protected object group.
   * 
   * @example
   * This is test description
   */
  description?: string;
  /**
   * @remarks
   * The time when the protected object group was created. Unit: milliseconds.
   * 
   * @example
   * 1624343180000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The most recent time when the protected object group was modified. Unit: milliseconds.
   * 
   * @example
   * 1701656305000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The name of the protected object group.
   * 
   * @example
   * apptest
   */
  groupName?: string;
  /**
   * @remarks
   * The names of the protected objects that are added to the protected object group. Separate multiple protected objects with commas (,).
   * 
   * @example
   * example02.aliyun-waf,example01.aliyun-waf
   */
  resourceList?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupName: 'GroupName',
      resourceList: 'ResourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      groupName: 'string',
      resourceList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourceGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of protected object groups.
   */
  groups?: DescribeDefenseResourceGroupsResponseBodyGroups[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BFEC5C77-049B-5E88-A5B6-CB0C****B66E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
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
      groups: { 'type': 'array', 'itemType': DescribeDefenseResourceGroupsResponseBodyGroups },
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

