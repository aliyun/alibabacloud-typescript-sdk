// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindSaseUserTagRequest extends $dara.Model {
  /**
   * @remarks
   * The collection of user IDs.
   */
  saseUserIds?: string[];
  /**
   * @remarks
   * The collection of user label IDs.
   */
  tagIds?: string[];
  static names(): { [key: string]: string } {
    return {
      saseUserIds: 'SaseUserIds',
      tagIds: 'TagIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saseUserIds: { 'type': 'array', 'itemType': 'string' },
      tagIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.saseUserIds)) {
      $dara.Model.validateArray(this.saseUserIds);
    }
    if(Array.isArray(this.tagIds)) {
      $dara.Model.validateArray(this.tagIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

