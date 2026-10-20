// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVersionsResponseBodySiteVersionList extends $dara.Model {
  /**
   * @remarks
   * The creation time. The time follows the ISO 8601 standard and includes a time zone offset. Example: 2024-06-15T17:41:27+08:00.
   * 
   * @example
   * 2024-06-15T17:41:27+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Site A uses multiple environments
   */
  description?: string;
  /**
   * @remarks
   * The list of environments for the site version. No environment is configured, or one or more environments are configured, such as the default environment and Environment 2.
   */
  environmentNameList?: string[];
  /**
   * @remarks
   * The parent version of the site version.
   * 
   * @example
   * 1
   */
  parentSiteVersion?: number;
  /**
   * @remarks
   * Specifies whether the version is read-only. Default value: false.
   * 
   * @example
   * false
   */
  readOnly?: boolean;
  /**
   * @remarks
   * The site version.
   * 
   * @example
   * 8
   */
  siteVersion?: number;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - **online**: Available.
   * 
   * - **configuring**: Configuring.
   * 
   * - **configure_faild**: Configuration failed.
   * 
   * @example
   * online
   */
  status?: string;
  /**
   * @remarks
   * The update time. The time follows the ISO 8601 standard and includes a time zone offset. Example: 2024-06-15T17:41:27+08:00.
   * 
   * @example
   * 2024-06-15T17:41:27+08:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      environmentNameList: 'EnvironmentNameList',
      parentSiteVersion: 'ParentSiteVersion',
      readOnly: 'ReadOnly',
      siteVersion: 'SiteVersion',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      environmentNameList: { 'type': 'array', 'itemType': 'string' },
      parentSiteVersion: 'number',
      readOnly: 'boolean',
      siteVersion: 'number',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.environmentNameList)) {
      $dara.Model.validateArray(this.environmentNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7EBEC214-805D-5FE9-AEED-258FE0F8850F
   */
  requestId?: string;
  /**
   * @remarks
   * The list of versions for the site.
   */
  siteVersionList?: ListVersionsResponseBodySiteVersionList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      siteVersionList: 'SiteVersionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      siteVersionList: { 'type': 'array', 'itemType': ListVersionsResponseBodySiteVersionList },
    };
  }

  validate() {
    if(Array.isArray(this.siteVersionList)) {
      $dara.Model.validateArray(this.siteVersionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

