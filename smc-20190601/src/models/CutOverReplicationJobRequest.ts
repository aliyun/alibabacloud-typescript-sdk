// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CutOverReplicationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the incremental migration job.
   * 
   * This parameter is required.
   * 
   * @example
   * j-bp1fnx5y3djc4cop****
   */
  jobId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * Specifies whether to migrate full data for the last time. Valid Values:
   * 
   * *   true: migrates full data for the last time.
   * *   false: does not migrate full data for the last time.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  syncData?: boolean;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      syncData: 'SyncData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      syncData: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

