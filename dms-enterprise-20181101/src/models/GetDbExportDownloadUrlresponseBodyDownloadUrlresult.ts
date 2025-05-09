// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDbExportDownloadURLResponseBodyDownloadURLResult extends $dara.Model {
  /**
   * @example
   * true
   */
  hasResult?: boolean;
  /**
   * @example
   * tip message
   */
  tipMessage?: string;
  /**
   * @example
   * https://dms-idb-hangzhou.oss-cn-hangzhou.aliyuncs.com/xxx.zip
   */
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      hasResult: 'HasResult',
      tipMessage: 'TipMessage',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasResult: 'boolean',
      tipMessage: 'string',
      URL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

