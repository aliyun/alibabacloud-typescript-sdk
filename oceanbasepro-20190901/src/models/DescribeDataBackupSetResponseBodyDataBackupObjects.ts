// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataBackupSetResponseBodyDataBackupObjectsDatabaseTablesList } from "./DescribeDataBackupSetResponseBodyDataBackupObjectsDatabaseTablesList";


export class DescribeDataBackupSetResponseBodyDataBackupObjects extends $dara.Model {
  /**
   * @example
   * test-****way
   */
  clusterName?: string;
  databaseTablesList?: DescribeDataBackupSetResponseBodyDataBackupObjectsDatabaseTablesList[];
  /**
   * @example
   * ob2mr3oae0****
   */
  tenantName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      databaseTablesList: 'DatabaseTablesList',
      tenantName: 'TenantName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      databaseTablesList: { 'type': 'array', 'itemType': DescribeDataBackupSetResponseBodyDataBackupObjectsDatabaseTablesList },
      tenantName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.databaseTablesList)) {
      $dara.Model.validateArray(this.databaseTablesList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

