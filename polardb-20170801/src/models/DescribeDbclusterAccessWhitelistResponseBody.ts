// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroups } from "./DescribeDbclusterAccessWhitelistResponseBodyDbclusterSecurityGroups";
import { DescribeDBClusterAccessWhitelistResponseBodyItems } from "./DescribeDbclusterAccessWhitelistResponseBodyItems";


export class DescribeDBClusterAccessWhitelistResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Elastic Compute Service (ECS) security groups that are associated with the cluster.
   */
  DBClusterSecurityGroups?: DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroups;
  /**
   * @remarks
   * The details about the cluster.
   */
  items?: DescribeDBClusterAccessWhitelistResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 559E91A2-CDA3-4E9F-808B-29D738******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterSecurityGroups: 'DBClusterSecurityGroups',
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterSecurityGroups: DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroups,
      items: DescribeDBClusterAccessWhitelistResponseBodyItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.DBClusterSecurityGroups && typeof (this.DBClusterSecurityGroups as any).validate === 'function') {
      (this.DBClusterSecurityGroups as any).validate();
    }
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

