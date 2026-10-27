// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMachineAppsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SAE application.
   * 
   * @example
   * 5b41f4bf-349f-4263-89b1-9234c034****
   */
  appId?: string;
  /**
   * @remarks
   * The name of the SAE application.
   * 
   * @example
   * agent-commprice-shop
   */
  appName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  appRegionId?: string;
  /**
   * @remarks
   * The authorization version of the asset. Valid values:
   * - **6**: Anti-virus Edition
   * - **5**: Premium Edition
   * - **3**: Enterprise Edition
   * - **7**: Ultimate Edition
   * - **10**: Value-added Service Edition
   * 
   * @example
   * 7
   */
  authVersion?: string;
  /**
   * @remarks
   * The page number of the current page returned during paging in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return per page during paging in a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The UID of the resource directory.
   * 
   * @example
   * 123456
   */
  resourceDirectoryUid?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appRegionId: 'AppRegionId',
      authVersion: 'AuthVersion',
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      resourceDirectoryUid: 'ResourceDirectoryUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appRegionId: 'string',
      authVersion: 'string',
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      resourceDirectoryUid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

