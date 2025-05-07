// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroupsSecurityIPGroup } from "./DescribeDbinstanceNetInfoResponseBodyDbinstanceNetInfosDbinstanceNetInfoSecurityIpgroupsSecurityIpgroup";


export class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroups extends $dara.Model {
  securityIPGroup?: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroupsSecurityIPGroup[];
  static names(): { [key: string]: string } {
    return {
      securityIPGroup: 'securityIPGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityIPGroup: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroupsSecurityIPGroup },
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

