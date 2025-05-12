// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDesktopsRequestUserCommands extends $dara.Model {
  /**
   * @remarks
   * The command content.
   * 
   * @example
   * bmV3LWl0ZW0gZDpcdGVzdF91c2VyX2NvbW1hbmRzLnR4dCAtdHlwZSBm****
   */
  content?: string;
  /**
   * @remarks
   * The encoding mode of the command content.
   * 
   * Valid values:
   * 
   * *   Base64: encodes the command content in Base64.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   PlainText: does not encode the command content.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Base64
   */
  contentEncoding?: string;
  /**
   * @remarks
   * The language type of the command.
   * 
   * Valid values:
   * 
   * *   RunPowerShellScript: PowerShell commands (applicable to Windows cloud computers).
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   RunShellScript: shell commands (applicable to Linux cloud computers).
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   RunBatScript: batch commands (applicable to Windows cloud computers).
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * RunPowerShellScript
   */
  contentType?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentEncoding: 'ContentEncoding',
      contentType: 'ContentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentEncoding: 'string',
      contentType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

