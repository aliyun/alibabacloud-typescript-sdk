// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolicyResponseBodyPolicyProtocolConfigRDP extends $dara.Model {
  /**
   * @remarks
   * Indicates whether downloading from the clipboard is enabled. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * @example
   * Enable
   */
  clipboardDownload?: string;
  /**
   * @remarks
   * Indicates whether file uploading from the clipboard is enabled. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * @example
   * Enable
   */
  clipboardUpload?: string;
  /**
   * @remarks
   * Indicates whether driver mapping is enabled. Valid values:
   * 
   * *   Enable
   * *   Disable
   * 
   * @example
   * Enable
   */
  diskRedirection?: string;
  /**
   * @remarks
   * Indicates whether keyboard recording is enabled. Valid values:
   * 
   * *   Enable
   * *   Disable
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

