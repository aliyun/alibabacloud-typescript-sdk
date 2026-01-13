// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExtensionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current version.
   * 
   * @example
   * 2.1
   */
  currentVersion?: string;
  /**
   * @remarks
   * The description of the extension.
   * 
   * @example
   * zhparser
   */
  description?: string;
  /**
   * @remarks
   * The extension ID.
   * 
   * @example
   * 37
   */
  extensionId?: string;
  /**
   * @remarks
   * The extension name.
   * 
   * @example
   * zhparser
   */
  extensionName?: string;
  /**
   * @remarks
   * Indicates whether an instance restart is required after you install the extension.
   * 
   * @example
   * False
   */
  isInstallNeedRestart?: boolean;
  /**
   * @remarks
   * Whether it is the latest version extension.
   * 
   * @example
   * True
   */
  isLatestVersion?: boolean;
  /**
   * @remarks
   * The latest version.
   * 
   * @example
   * 2.1
   */
  latestVersion?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the extension.
   * 
   * @example
   * installed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentVersion: 'CurrentVersion',
      description: 'Description',
      extensionId: 'ExtensionId',
      extensionName: 'ExtensionName',
      isInstallNeedRestart: 'IsInstallNeedRestart',
      isLatestVersion: 'IsLatestVersion',
      latestVersion: 'LatestVersion',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentVersion: 'string',
      description: 'string',
      extensionId: 'string',
      extensionName: 'string',
      isInstallNeedRestart: 'boolean',
      isLatestVersion: 'boolean',
      latestVersion: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

