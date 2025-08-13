// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportNameListRequest extends $dara.Model {
  /**
   * @remarks
   * Set the language type for request and response messages, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Creation type
   * 
   * @example
   * NORMAL
   */
  createType?: string;
  /**
   * @remarks
   * Import name list.
   * 
   * @example
   * aa\\nbb\\ncc
   */
  data?: string;
  /**
   * @remarks
   * Description information.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * Document import type:
   * 
   * 
   * INPUT: Text input
   * CSV: CSV upload
   * NONE: Do not upload for now
   * 
   * This parameter is required.
   * 
   * @example
   * CSV
   */
  importType?: string;
  /**
   * @remarks
   * name content memo
   * 
   * @example
   * 名单内容描述
   */
  memo?: string;
  /**
   * @remarks
   * nameListType
   * 
   * @example
   * accountId
   */
  nameListType?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Title.
   * 
   * This parameter is required.
   * 
   * @example
   * 变量title
   */
  title?: string;
  /**
   * @remarks
   * Variable ID
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

