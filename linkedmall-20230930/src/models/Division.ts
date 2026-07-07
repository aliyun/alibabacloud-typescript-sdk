// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Division extends $dara.Model {
  /**
   * @remarks
   * Address encoding
   * 
   * @example
   * 310000
   */
  divisionCode?: number;
  /**
   * @remarks
   * Address Level
   * 
   * @example
   * 2
   */
  divisionLevel?: number;
  /**
   * @remarks
   * Address Name
   * 
   * @example
   * 上海
   */
  divisionName?: string;
  /**
   * @remarks
   * Parent ID
   * 
   * @example
   * 1
   */
  parentId?: number;
  /**
   * @remarks
   * Address pinyin
   * 
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

