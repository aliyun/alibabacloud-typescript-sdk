// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRumAppRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * app
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * ecs
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRumAppRequest extends $dara.Model {
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
  tag?: CreateRumAppRequestTag[];
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
      tag: 'Tag',
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
      tag: { 'type': 'array', 'itemType': CreateRumAppRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

