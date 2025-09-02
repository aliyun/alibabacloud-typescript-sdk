// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMetaCollectionRequest extends $dara.Model {
  /**
   * @remarks
   * The comment of the collection. The comment must be 1 to 64 characters in length.
   * 
   * @example
   * this is a comment
   */
  comment?: string;
  /**
   * @remarks
   * The name of the collection.
   * 
   * @example
   * myCollectionName
   */
  name?: string;
  /**
   * @remarks
   * The unique identifier of the collection.
   * 
   * This parameter is required.
   * 
   * @example
   * album.396397
   */
  qualifiedName?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      name: 'Name',
      qualifiedName: 'QualifiedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      name: 'string',
      qualifiedName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

