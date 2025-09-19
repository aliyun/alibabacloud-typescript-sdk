// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetImageEventOperationRequest extends $dara.Model {
  /**
   * @remarks
   * The primary key of the alert handling rule.
   * 
   * @example
   * 814163
   */
  id?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
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
      id: 'Id',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

