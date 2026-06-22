// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMachineAppsRequest extends $dara.Model {
  /**
   * @remarks
   * The SAE application ID.
   * 
   * @example
   * 5b41f4bf-349f-4263-89b1-9234c034****
   */
  appId?: string;
  /**
   * @remarks
   * The SAE application name.
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
   * - **10**: value-added service Edition.
   * 
   * @example
   * 7
   */
  authVersion?: string;
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paging query.
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

