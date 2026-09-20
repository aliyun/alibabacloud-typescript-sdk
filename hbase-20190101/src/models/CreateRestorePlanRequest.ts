// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRestorePlanRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ApsaraDB for HBase Performance-enhanced Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-bp150tns0sjxs****
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to restore all tables. Valid values:
   * 
   * - **true**: Restores all tables in the ApsaraDB for HBase Performance-enhanced Edition cluster.
   * - **false**: Does not restore all tables in the ApsaraDB for HBase Performance-enhanced Edition cluster.
   * 
   * > If this parameter is set to **true**, the **Tables** parameter is invalid. If this parameter is set to **false**, the **Tables** parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  restoreAllTable?: boolean;
  /**
   * @remarks
   * Specifies whether to restore data by using the copy method. Set the value to **true**.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  restoreByCopy?: boolean;
  /**
   * @remarks
   * The point in time to which you want to restore data. The point in time must be within the recoverable time range. You can call the [DescribeRecoverableTimeRange](https://help.aliyun.com/document_detail/188365.html) operation to query the recoverable time range.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-11-05T05:49:42Z
   */
  restoreToDate?: string;
  /**
   * @remarks
   * The table names. Specify one table name per line. Wildcards (*) are not supported.
   * 
   * - To restore to the current table, use the format: `namespace:table`. Example: `default:testTable`.
   * - To restore to a different table, use the format: `namespace:table/namespace:table2`. Example: `default:testTable/default:testTable2`.
   * 
   * @example
   * test_ns:test_table/test_ns:test_table2
   */
  tables?: string;
  /**
   * @remarks
   * The ID of the ApsaraDB for HBase Performance-enhanced Edition cluster to which data is restored. You can also restore data to the cluster that is currently backed up.
   * 
   * > The specified ApsaraDB for HBase Performance-enhanced Edition cluster and the backed-up ApsaraDB for HBase Performance-enhanced Edition cluster must meet the following requirements:<ul>
   * <li>They are of the same version.</li>
   * <li>They are in the same region.</li>
   * <li>They are associated with the BDS cluster.</li></ul>.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-bp169l540vc6c****
   */
  targetClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      restoreAllTable: 'RestoreAllTable',
      restoreByCopy: 'RestoreByCopy',
      restoreToDate: 'RestoreToDate',
      tables: 'Tables',
      targetClusterId: 'TargetClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      restoreAllTable: 'boolean',
      restoreByCopy: 'boolean',
      restoreToDate: 'string',
      tables: 'string',
      targetClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

