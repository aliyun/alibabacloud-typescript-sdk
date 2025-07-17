// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRumAppsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The group to which the application belongs.
   * 
   * @example
   * default
   */
  appGroup?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * b590lhguqs@28f515462******
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application. You can specify only one application name in each request.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The application type. Currently, supported application types include: web, mini program, Android, iOS, Windows, macOS, and HarmonyOS.
   * 
   * @example
   * web
   */
  appType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxyexli2****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appGroup: 'AppGroup',
      appId: 'AppId',
      appName: 'AppName',
      appType: 'AppType',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroup: 'string',
      appId: 'string',
      appName: 'string',
      appType: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

