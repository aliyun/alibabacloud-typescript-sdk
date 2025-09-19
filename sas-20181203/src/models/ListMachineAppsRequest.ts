// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMachineAppsRequest extends $dara.Model {
  /**
   * @remarks
   * SAE application ID.
   * 
   * @example
   * 5b41f4bf-349f-4263-89b1-9234c034****
   */
  appId?: string;
  /**
   * @remarks
   * SAE application name.
   * 
   * @example
   * agent-commprice-shop
   */
  appName?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  appRegionId?: string;
  /**
   * @remarks
   * The authorization version of the asset. Values:
   * - **6**: Anti-virus edition
   * - **5**: Advanced edition
   * - **3**: Enterprise edition
   * - **7**: Ultimate edition
   * - **10**: Value-added Service Edition
   * 
   * @example
   * 7
   */
  authVersion?: string;
  /**
   * @remarks
   * The page number to display in a paginated query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language type for request and response, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of items to display per page in a paginated query.
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

