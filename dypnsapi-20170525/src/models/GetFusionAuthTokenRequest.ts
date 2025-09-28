// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFusionAuthTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The bundle ID of the app. This parameter is required when Platform is set to iOS.
   * 
   * @example
   * com.example.test
   */
  bundleId?: string;
  /**
   * @remarks
   * The validity period of the token. Unit: seconds. Valid values: 900 to 43200.
   * 
   * This parameter is required.
   * 
   * @example
   * 900
   */
  durationSeconds?: number;
  ownerId?: number;
  /**
   * @remarks
   * The package name of the app. This parameter is required when Platform is set to Android.
   * 
   * @example
   * com.example.test
   */
  packageName?: string;
  /**
   * @remarks
   * The package signature of the app. This parameter is required when Platform is set to Android.
   * 
   * @example
   * 47fcc************************278
   */
  packageSign?: string;
  /**
   * @remarks
   * The platform type. Valid values: Android and iOS.
   * 
   * This parameter is required.
   * 
   * @example
   * Android
   */
  platform?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The service code.
   * 
   * This parameter is required.
   * 
   * @example
   * FA1000*************201
   */
  schemeCode?: string;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
      durationSeconds: 'DurationSeconds',
      ownerId: 'OwnerId',
      packageName: 'PackageName',
      packageSign: 'PackageSign',
      platform: 'Platform',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemeCode: 'SchemeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
      durationSeconds: 'number',
      ownerId: 'number',
      packageName: 'string',
      packageSign: 'string',
      platform: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemeCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

