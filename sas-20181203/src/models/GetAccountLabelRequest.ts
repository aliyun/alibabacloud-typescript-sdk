// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountLabelRequest extends $dara.Model {
  /**
   * @remarks
   * The tags.
   * 
   * This parameter is required.
   */
  labelList?: string[];
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      labelList: 'LabelList',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelList: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labelList)) {
      $dara.Model.validateArray(this.labelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

