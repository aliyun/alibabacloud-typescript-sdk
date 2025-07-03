// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGdnInstancesResponseBodyDataGdnInstanceListMemberList } from "./DescribeGdnInstancesResponseBodyDataGdnInstanceListMemberList";


export class DescribeGdnInstancesResponseBodyDataGdnInstanceList extends $dara.Model {
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * gdn-***
   */
  gdnInstanceName?: string;
  /**
   * @example
   * 2025-01-02T13:11:10.000+0000
   */
  gmtCreated?: string;
  memberList?: DescribeGdnInstancesResponseBodyDataGdnInstanceListMemberList[];
  /**
   * @example
   * 5.7
   */
  mysqlVersion?: string;
  /**
   * @example
   * Creating
   */
  status?: string;
  /**
   * @example
   * ""
   */
  switchHistory?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gdnInstanceName: 'GdnInstanceName',
      gmtCreated: 'GmtCreated',
      memberList: 'MemberList',
      mysqlVersion: 'MysqlVersion',
      status: 'Status',
      switchHistory: 'SwitchHistory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gdnInstanceName: 'string',
      gmtCreated: 'string',
      memberList: { 'type': 'array', 'itemType': DescribeGdnInstancesResponseBodyDataGdnInstanceListMemberList },
      mysqlVersion: 'string',
      status: 'string',
      switchHistory: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.memberList)) {
      $dara.Model.validateArray(this.memberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

