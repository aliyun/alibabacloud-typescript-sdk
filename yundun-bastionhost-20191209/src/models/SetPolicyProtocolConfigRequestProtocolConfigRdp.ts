// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPolicyProtocolConfigRequestProtocolConfigRDP extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable downloading from the clipboard. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * > If you do not specify this parameter, the default value Disable is used.
   * 
   * @example
   * Enable
   */
  clipboardDownload?: string;
  /**
   * @remarks
   * Specifies whether to enable uploading from the clipboard. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * > If you do not specify this parameter, the default value Disable is used.
   * 
   * @example
   * Enable
   */
  clipboardUpload?: string;
  /**
   * @remarks
   * Specifies whether to enable driver mapping. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * > If you do not specify this parameter, the default value Disable is used.
   * 
   * @example
   * Enable
   */
  diskRedirection?: string;
  /**
   * @remarks
   * Specifies whether to enable keyboard operation recording. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * > If you do not specify this parameter, the default value Disable is used.
   * 
   * @example
   * Enable
   */
  recordKeyboard?: string;
  static names(): { [key: string]: string } {
    return {
      clipboardDownload: 'ClipboardDownload',
      clipboardUpload: 'ClipboardUpload',
      diskRedirection: 'DiskRedirection',
      recordKeyboard: 'RecordKeyboard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipboardDownload: 'string',
      clipboardUpload: 'string',
      diskRedirection: 'string',
      recordKeyboard: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

