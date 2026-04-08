// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsDataSourceConfigItemsRequest extends $dara.Model {
  /**
   * @example
   * zh_CN
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Hive
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'lang',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

