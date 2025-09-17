// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteReplicationJobRequest extends $dara.Model {
  /**
   * @remarks
   * The migration job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * j-bp17m1vi6x21qhqk****
   */
  jobId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

