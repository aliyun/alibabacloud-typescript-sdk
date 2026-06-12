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
   * The type of the service publishing action. Valid values:
   * 
   * - PublishNewVersion: A new version is published.
   * 
   * - PublishOfflineVersion: An unpublished version is republished.
   * 
   * - UpdateLatestVersion: The latest online version is updated.
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

