// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWorkgroupAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The new description of the workgroup. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The name of the workgroup. The name must meet the following requirements:
   * 
   * *   The name must be unique.
   * *   The name must be 2 to 64 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain digits, colons (:), periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * testMigrationTaskName
   */
  name?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the workgroup.
   * 
   * This parameter is required.
   * 
   * @example
   * w-***
   */
  workgroupId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      workgroupId: 'WorkgroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      workgroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

