// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Division extends $dara.Model {
  /**
   * @example
   * 310000
   */
  divisionCode?: number;
  /**
   * @example
   * 2
   */
  divisionLevel?: number;
  divisionName?: string;
  /**
   * @example
   * 1
   */
  parentId?: number;
  /**
   * @example
   * shang hai
   */
  pinyin?: string;
  static names(): { [key: string]: string } {
    return {
      divisionCode: 'divisionCode',
      divisionLevel: 'divisionLevel',
      divisionName: 'divisionName',
      parentId: 'parentId',
      pinyin: 'pinyin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      divisionCode: 'number',
      divisionLevel: 'number',
      divisionName: 'string',
      parentId: 'number',
      pinyin: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

