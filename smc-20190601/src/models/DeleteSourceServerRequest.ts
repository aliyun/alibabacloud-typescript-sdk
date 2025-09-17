// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSourceServerRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to forcibly delete the migration source. Valid values:
   * 
   * *   true: forcibly deletes the migration source and the migration job created for the migration source, and releases the intermediate resources of the migration job.
   * *   false: does not delete the migration source if a migration job is created for the migration source.
   * 
   * @example
   * true
   */
  force?: boolean;
  ownerId?: number;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The migration source ID.
   * 
   * This parameter is required.
   * 
   * @example
   * s-bp17m1vi6x20c6g6****
   */
  sourceId?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'Force',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      sourceId: 'SourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      sourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

