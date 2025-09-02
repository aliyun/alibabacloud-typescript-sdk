// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMetaCollectionRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the collection.
   * 
   * This parameter is required.
   * 
   * @example
   * album.12333
   */
  qualifiedName?: string;
  static names(): { [key: string]: string } {
    return {
      qualifiedName: 'QualifiedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

