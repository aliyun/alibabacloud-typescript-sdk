// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMmsDataSourceConfigItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The language for the descriptions of the configuration items. Defaults to Chinese (`zh_CN`).
   * 
   * @example
   * zh_CN
   */
  lang?: string;
  /**
   * @remarks
   * The data source type.
   * 
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

