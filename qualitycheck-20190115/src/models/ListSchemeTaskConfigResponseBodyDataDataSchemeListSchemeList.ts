// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSchemeTaskConfigResponseBodyDataDataSchemeListSchemeList extends $dara.Model {
  name?: string;
  /**
   * @example
   * 158
   */
  schemeId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      schemeId: 'SchemeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      schemeId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

