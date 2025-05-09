// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataExportDownloadURLResponseBodyDownloadURLResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether export results are available for download. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  hasResult?: boolean;
  /**
   * @remarks
   * The message that indicates an exception.
   * 
   * @example
   * tip message
   */
  tipMessage?: string;
  /**
   * @remarks
   * The download URL of the file that records the export results for the ticket.
   * 
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

