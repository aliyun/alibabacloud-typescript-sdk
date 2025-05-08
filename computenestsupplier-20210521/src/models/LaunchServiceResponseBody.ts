// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LaunchServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
  /**
   * @remarks
   * The mode of the service online. Valid Type
   * 
   * - PublishNewVersion: Launch new version
   * - PublishOfflineVersion:  The offline version is online again.
   * - UpdateLatestVersion: Update the latest version online
   * 
   * @example
   * PublishNewVersion
   */
  serviceLaunchResultType?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceLaunchResultType: 'ServiceLaunchResultType',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceLaunchResultType: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

