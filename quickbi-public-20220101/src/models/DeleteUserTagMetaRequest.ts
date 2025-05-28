// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteUserTagMetaRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the tag to be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * pop_001
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

