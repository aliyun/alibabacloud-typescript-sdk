// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComponentAssetsRequest extends $dara.Model {
  /**
   * @remarks
   * The component name.
   * 
   * This parameter is required.
   * 
   * @example
   * python3
   */
  componentName?: string;
  /**
   * @remarks
   * The language of the request and response.
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
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

