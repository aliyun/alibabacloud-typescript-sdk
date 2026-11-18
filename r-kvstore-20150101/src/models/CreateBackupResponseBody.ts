// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBackupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backup job ID.  
   * For cluster instances created before December 5, 2023, the return value consists of the job IDs of all child database nodes. For example, for a cluster instance with two shards, the return value is similar to "10000,10001".  
   * For cluster instances created on or after December 5, 2023, the jobs of all database nodes in a cluster are described by a single job ID. You only need to focus on this job ID.
   * 
   * @example
   * "1022,2480"
   */
  backupJobID?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2FF6158E-3394-4A90-B634-79C49184****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      backupJobID: 'BackupJobID',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupJobID: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

