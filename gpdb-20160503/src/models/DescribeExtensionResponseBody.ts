// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExtensionResponseBody extends $dara.Model {
  /**
   * @example
   * 2.1
   */
  currentVersion?: string;
  /**
   * @example
   * zhparser
   */
  description?: string;
  /**
   * @example
   * 37
   */
  extensionId?: string;
  /**
   * @example
   * zhparser
   */
  extensionName?: string;
  /**
   * @example
   * False
   */
  isInstallNeedRestart?: boolean;
  /**
   * @example
   * True
   */
  isLatestVersion?: boolean;
  /**
   * @example
   * 2.1
   */
  latestVersion?: string;
  /**
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
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

