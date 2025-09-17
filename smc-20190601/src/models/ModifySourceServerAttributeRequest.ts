// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySourceServerAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the migration source. The description can be up to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * This is a source server.
   */
  description?: string;
  /**
   * @remarks
   * The name of the migration source. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * testSourceServerName
   */
  name?: string;
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
      description: 'Description',
      name: 'Name',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      sourceId: 'SourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
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

