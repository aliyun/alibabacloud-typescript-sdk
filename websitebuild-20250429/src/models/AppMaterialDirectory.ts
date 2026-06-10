// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppMaterialDirectory extends $dara.Model {
  /**
   * @remarks
   * Application instance business ID
   * 
   * @example
   * WD20250814102215000001
   */
  bizId?: string;
  /**
   * @remarks
   * List of subfolders
   */
  children?: AppMaterialDirectory[];
  /**
   * @remarks
   * Folder ID.
   * 
   * @example
   * WS20260206134746000001-system
   */
  directoryId?: string;
  /**
   * @remarks
   * Name
   * 
   * @example
   * 图片管理
   */
  name?: string;
  /**
   * @remarks
   * Sorting number
   * 
   * @example
   * 1
   */
  sortNum?: string;
  /**
   * @remarks
   * Folder type
   * 
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

