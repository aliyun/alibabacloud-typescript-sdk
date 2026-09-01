// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComponentAssetFormRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the component.
   * 
   * This parameter is required.
   * 
   * @example
   * python3
   */
  componentName?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      componentName: 'ComponentName',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentName: 'string',
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

