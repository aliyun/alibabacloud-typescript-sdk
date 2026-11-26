// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProcessItem extends $dara.Model {
  /**
   * @remarks
   * The bundle identifier of the application to which the process belongs. For example, com.apple.Terminal is the bundle identifier of the macOS Terminal application.
   * 
   * @example
   * com.apple.Terminal
   */
  bundleId?: string;
  /**
   * @remarks
   * The operating system type of the user terminal device to which the process belongs. Valid values:
   * - windows: Windows.
   * - macOS: macOS.
   * - linux: Linux.
   * 
   * @example
   * macOS
   */
  devType?: string;
  /**
   * @remarks
   * The process directory path.
   * 
   * @example
   * /System/Applications/Utilities/Terminal.app/Contents/MacOS
   */
  directory?: string;
  /**
   * @remarks
   * The process name.
   * 
   * @example
   * Terminal
   */
  process?: string;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      devType: 'DevType',
      directory: 'Directory',
      process: 'Process',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
      devType: 'string',
      directory: 'string',
      process: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

