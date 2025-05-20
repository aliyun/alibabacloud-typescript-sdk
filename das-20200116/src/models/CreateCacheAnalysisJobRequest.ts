// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCacheAnalysisJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup file. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/473823.html) operation to query the ID.
   * 
   * *   If you need to specify multiple backup file IDs, separate them with commas (,). For example, you can set this parameter to `12345,67890`.
   * *   If you do not specify this parameter, the system automatically backs up the task and performs cache analysis on the backup file.
   * 
   * @example
   * 12345
   */
  backupSetId?: string;
  /**
   * @remarks
   * The ID of the ApsaraDB for Redis instance.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp18ff4a195d****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the data node on the instance. You can specify this parameter to query the monitoring information about the specified node.
   * 
   * >  If you specify the BackupSetId parameter, the system ignores the NodeId parameter. You can call the [DescribeLogicInstanceTopology](https://help.aliyun.com/document_detail/473786.html) operation to query the node ID.
   * 
   * @example
   * r-x****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The delimiters used to identify the prefixes of keys. You do not need to specify this parameter if one or more of the following default delimiters are used: `: ; , _ - + @ = | #`
   * 
   * @example
   * &
   */
  separators?: string;
  static names(): { [key: string]: string } {
    return {
      backupSetId: 'BackupSetId',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      separators: 'Separators',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupSetId: 'string',
      instanceId: 'string',
      nodeId: 'string',
      separators: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

