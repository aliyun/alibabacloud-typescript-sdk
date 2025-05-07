// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroupsSecurityIPGroup } from "./DescribeDbinstanceNetInfoForChannelResponseBodyDbinstanceNetInfosDbinstanceNetInfoSecurityIpgroupsSecurityIpgroup";


export class DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroups extends $dara.Model {
  securityIPGroup?: DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroupsSecurityIPGroup[];
  static names(): { [key: string]: string } {
    return {
      securityIPGroup: 'securityIPGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIPGroup: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroupsSecurityIPGroup },
    };
  }

  validate() {
    if(Array.isArray(this.securityIPGroup)) {
      $dara.Model.validateArray(this.securityIPGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

