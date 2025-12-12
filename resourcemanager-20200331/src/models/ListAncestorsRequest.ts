// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAncestorsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the child folder.
   * 
   * This parameter is required.
   * 
   * @example
   * fd-i1c9nr****
   */
  childId?: string;
  static names(): { [key: string]: string } {
    return {
      childId: 'ChildId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

