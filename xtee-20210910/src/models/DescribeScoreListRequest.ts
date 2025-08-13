// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScoreListRequest extends $dara.Model {
  /**
   * @remarks
   * Primary key ID.
   * 
   * @example
   * 300126
   */
  id?: string;
  /**
   * @remarks
   * Language type of the returned message. Values:
   * 
   * - **zh** (default): Chinese
   * - **en**: English
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
      id: 'string',
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

