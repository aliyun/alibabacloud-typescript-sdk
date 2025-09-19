// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePluginSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response.**** Valid values:
   * 
   * *   **zh** (default)
   * *   **en**
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The name of the plug-in. Valid values:
   * 
   * *   alinet: AliNet.
   * *   alisecguard: client protection.
   * *   alihips: AliHips.
   * 
   * @example
   * alihips
   */
  pluginName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      pluginName: 'PluginName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      pluginName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

