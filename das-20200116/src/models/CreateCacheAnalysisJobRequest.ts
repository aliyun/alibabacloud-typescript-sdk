// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCacheAnalysisJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup file. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/473823.html) operation to obtain the backup file ID.
   * 
   * - To specify multiple backup file IDs, separate them with commas (,), such as `12345,67890`.
   * - If you do not specify this parameter, the system automatically performs a backup and runs cache analysis on the backup file.
   * 
   * @example
   * 12345
   */
  backupSetId?: string;
  /**
   * @remarks
   * The instance ID of the Redis instance.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp18ff4a195d****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the data node in the instance. Specify this parameter to query monitoring information of a specific node.
   * >If you specify the BackupSetId parameter, this parameter is ignored. You can call the [DescribeLogicInstanceTopology](https://help.aliyun.com/document_detail/473786.html) operation to query node IDs.
   * 
   * @example
   * r-x****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The delimiters used to identify key prefixes. You do not need to specify this parameter if the default delimiters `:;,_-+@=|#` are used.
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

