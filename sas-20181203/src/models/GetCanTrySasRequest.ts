// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCanTrySasRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the request is redirected from the Elastic Compute Service (ECS) console. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  fromEcs?: boolean;
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
      fromEcs: 'FromEcs',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromEcs: 'boolean',
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

