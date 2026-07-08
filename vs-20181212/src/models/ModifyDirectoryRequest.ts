// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the directory.
   * 
   * @example
   * 目录2
   */
  description?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * This parameter is required.
   * 
   * @example
   * 399*****488-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * The name of the directory.
   * 
   * @example
   * 目录2
   */
  name?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      name: 'Name',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      name: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

