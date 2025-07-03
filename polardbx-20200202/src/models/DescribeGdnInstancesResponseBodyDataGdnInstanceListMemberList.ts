// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGdnInstancesResponseBodyDataGdnInstanceListMemberList extends $dara.Model {
  /**
   * @example
   * polarx.x4.medium.2e
   */
  classCode?: string;
  /**
   * @example
   * polarx.x4.medium.2e
   */
  cnNodeClassCode?: string;
  /**
   * @example
   * 2
   */
  cnNodeCount?: string;
  /**
   * @example
   * drds_polarxpre_public_cn
   */
  commodityCode?: string;
  /**
   * @example
   * mysql.n4.medium.25
   */
  dnNodeClassCode?: string;
  /**
   * @example
   * 2
   */
  dnNodeCount?: string;
  /**
   * @example
   * 2025-01-02T13:11:10.000+0000
   */
  expireTime?: string;
  /**
   * @example
   * 2025-01-02T13:11:10.000+0000
   */
  gmtCreated?: string;
  /**
   * @example
   * pxc-***
   */
  memberName?: string;
  /**
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @example
   * cn-zhangjiakou-a
   */
  primaryZone?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * primary、
   * standby
   */
  role?: string;
  /**
   * @example
   * cn-zhangjiakou-a
   */
  secondaryZone?: string;
  /**
   * @example
   * 1s
   */
  secondsBehindMaster?: string;
  /**
   * @example
   * Creating
   */
  status?: string;
  taskStatus?: string;
  /**
   * @example
   * cn-zhangjiakou-a
   */
  tertiaryZone?: string;
  /**
   * @example
   * cn-zhangjiakou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      classCode: 'ClassCode',
      cnNodeClassCode: 'CnNodeClassCode',
      cnNodeCount: 'CnNodeCount',
      commodityCode: 'CommodityCode',
      dnNodeClassCode: 'DnNodeClassCode',
      dnNodeCount: 'DnNodeCount',
      expireTime: 'ExpireTime',
      gmtCreated: 'GmtCreated',
      memberName: 'MemberName',
      payType: 'PayType',
      primaryZone: 'PrimaryZone',
      regionId: 'RegionId',
      role: 'Role',
      secondaryZone: 'SecondaryZone',
      secondsBehindMaster: 'SecondsBehindMaster',
      status: 'Status',
      taskStatus: 'TaskStatus',
      tertiaryZone: 'TertiaryZone',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classCode: 'string',
      cnNodeClassCode: 'string',
      cnNodeCount: 'string',
      commodityCode: 'string',
      dnNodeClassCode: 'string',
      dnNodeCount: 'string',
      expireTime: 'string',
      gmtCreated: 'string',
      memberName: 'string',
      payType: 'string',
      primaryZone: 'string',
      regionId: 'string',
      role: 'string',
      secondaryZone: 'string',
      secondsBehindMaster: 'string',
      status: 'string',
      taskStatus: 'string',
      tertiaryZone: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

