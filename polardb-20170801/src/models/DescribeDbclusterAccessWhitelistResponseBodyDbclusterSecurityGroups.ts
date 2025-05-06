// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroupsDBClusterSecurityGroup } from "./DescribeDbclusterAccessWhitelistResponseBodyDbclusterSecurityGroupsDbclusterSecurityGroup";


export class DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroups extends $dara.Model {
  DBClusterSecurityGroup?: DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroupsDBClusterSecurityGroup[];
  static names(): { [key: string]: string } {
    return {
      DBClusterSecurityGroup: 'DBClusterSecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterSecurityGroup: { 'type': 'array', 'itemType': DescribeDBClusterAccessWhitelistResponseBodyDBClusterSecurityGroupsDBClusterSecurityGroup },
    };
  }

  validate() {
    if(Array.isArray(this.DBClusterSecurityGroup)) {
      $dara.Model.validateArray(this.DBClusterSecurityGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

