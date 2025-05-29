// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDirectoryRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 348*****174-cn-qingdao
   */
  groupId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 399*****774-cn-qingdao
   */
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupId: 'GroupId',
      name: 'Name',
      ownerId: 'OwnerId',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      name: 'string',
      ownerId: 'number',
      parentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

