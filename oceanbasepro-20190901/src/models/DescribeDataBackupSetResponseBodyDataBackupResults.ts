// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataBackupSetResponseBodyDataBackupResultsTableBackupResults } from "./DescribeDataBackupSetResponseBodyDataBackupResultsTableBackupResults";


export class DescribeDataBackupSetResponseBodyDataBackupResults extends $dara.Model {
  /**
   * @example
   * container-opa-****-02
   */
  clusterName?: string;
  tableBackupResults?: DescribeDataBackupSetResponseBodyDataBackupResultsTableBackupResults[];
  /**
   * @example
   * ob2mr3oae0****
   */
  tenantName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'ClusterName',
      tableBackupResults: 'TableBackupResults',
      tenantName: 'TenantName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      tableBackupResults: { 'type': 'array', 'itemType': DescribeDataBackupSetResponseBodyDataBackupResultsTableBackupResults },
      tenantName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tableBackupResults)) {
      $dara.Model.validateArray(this.tableBackupResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

