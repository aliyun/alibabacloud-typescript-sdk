// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectWorkitemTypesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Req
   */
  category?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Project
   */
  spaceType?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      spaceType: 'spaceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      spaceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

