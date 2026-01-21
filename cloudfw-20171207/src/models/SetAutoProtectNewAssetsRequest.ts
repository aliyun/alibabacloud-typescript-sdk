// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAutoProtectNewAssetsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  autoProtect?: boolean;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 60.182.79.XXX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      autoProtect: 'AutoProtect',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoProtect: 'boolean',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

