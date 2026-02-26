// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppMaterialDirectory extends $dara.Model {
  /**
   * @example
   * WD20250814102215000001
   */
  bizId?: string;
  children?: AppMaterialDirectory[];
  /**
   * @example
   * WS20260206134746000001-system
   */
  directoryId?: string;
  name?: string;
  /**
   * @example
   * 1
   */
  sortNum?: string;
  /**
   * @example
   * CUSTOM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      children: 'Children',
      directoryId: 'DirectoryId',
      name: 'Name',
      sortNum: 'SortNum',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      children: { 'type': 'array', 'itemType': AppMaterialDirectory },
      directoryId: 'string',
      name: 'string',
      sortNum: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

