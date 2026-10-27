// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUuidsByAppIdRequest extends $dara.Model {
  /**
   * @remarks
   * The SAE application ID.
   * > You can call the [ListMachineApps](~~ListMachineApps~~) operation to obtain the value of this parameter.
   * This parameter is required. If it is not provided, the API returns HTTP 400 with the error code -101.
   * 
   * @example
   * 5b41f4bf-349f-4263-89b1-9234c034****
   */
  appId?: string;
  /**
   * @remarks
   * The region ID.
   * > You can call the [ListMachineApps](~~ListMachineApps~~) operation to obtain the value of this parameter.
   * This parameter is required. If it is not provided, the API returns HTTP 400 with the error code -101.
   * 
   * @example
   * cn-hangzhou
   */
  appRegionId?: string;
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
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries to return on each page in a paging query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The UID of the associated resource directory.
   * 
   * @example
   * 123456
   */
  resourceDirectoryUid?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appRegionId: 'AppRegionId',
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      resourceDirectoryUid: 'ResourceDirectoryUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appRegionId: 'string',
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

