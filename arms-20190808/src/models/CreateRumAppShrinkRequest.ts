// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRumAppShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the application group.
   * 
   * @example
   * default
   */
  appGroup?: string;
  /**
   * @remarks
   * The application name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-app
   */
  appName?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * Monitoring description
   */
  description?: string;
  /**
   * @remarks
   * The language used by the client.
   * 
   * @example
   * java
   */
  language?: string;
  /**
   * @remarks
   * The nickname of the application.
   * 
   * @example
   * test-app
   */
  nickName?: string;
  /**
   * @remarks
   * The name of the Android application package. This parameter is required if you create an Android application.
   * 
   * @example
   * com.xxxx.xxxxxx
   */
  packageName?: string;
  /**
   * @remarks
   * The region where the application resides. You can leave this parameter empty or set it to China East 2 Finance.
   * 
   * @example
   * cn-shanghai-finance-1
   */
  realRegionId?: string;
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
   * The application type. Valid values: web, miniapp, ios, and android.
   * 
   * This parameter is required.
   * 
   * @example
   * web
   */
  siteType?: string;
  /**
   * @remarks
   * The source. This is a reserved parameter.
   * 
   * @example
   * arms
   */
  source?: string;
  /**
   * @remarks
   * The list of tags. You can specify a maximum of 20 tags.
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appGroup: 'AppGroup',
      appName: 'AppName',
      description: 'Description',
      language: 'Language',
      nickName: 'NickName',
      packageName: 'PackageName',
      realRegionId: 'RealRegionId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      siteType: 'SiteType',
      source: 'Source',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroup: 'string',
      appName: 'string',
      description: 'string',
      language: 'string',
      nickName: 'string',
      packageName: 'string',
      realRegionId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      siteType: 'string',
      source: 'string',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

