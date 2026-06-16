// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportNameListRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The creation type.
   * 
   * @example
   * NORMAL
   */
  createType?: string;
  /**
   * @remarks
   * The list of names to import.
   * 
   * @example
   * aa\\nbb\\ncc
   */
  data?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The document import type. Valid values:
   * 
   * INPUT: data entry.
   * CSV: CSV upload.
   * NONE: no upload.
   * 
   * This parameter is required.
   * 
   * @example
   * CSV
   */
  importType?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  memo?: string;
  /**
   * @remarks
   * The nameListType.
   * 
   * @example
   * accountId
   */
  nameListType?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The title.
   * 
   * This parameter is required.
   * 
   * @example
   * 变量title
   */
  title?: string;
  /**
   * @remarks
   * The variable ID.
   * 
   * @example
   * 393314
   */
  variableId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      createType: 'createType',
      data: 'data',
      description: 'description',
      importType: 'importType',
      memo: 'memo',
      nameListType: 'nameListType',
      regId: 'regId',
      title: 'title',
      variableId: 'variableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      createType: 'string',
      data: 'string',
      description: 'string',
      importType: 'string',
      memo: 'string',
      nameListType: 'string',
      regId: 'string',
      title: 'string',
      variableId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

