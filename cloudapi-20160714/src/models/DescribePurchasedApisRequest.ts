// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePurchasedApisRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * 3b81fd160f5645e097cc8855d75a1cf6
   */
  apiId?: string;
  /**
   * @remarks
   * The name of the API.
   * 
   * @example
   * Cz88IpQuery
   */
  apiName?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * d27ad517be5f4c95ac3631780a8f4d50
   */
  groupId?: string;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  securityToken?: string;
  /**
   * @remarks
   * The name of the runtime environment. Valid values:
   * 
   * *   **RELEASE**
   * *   **PRE**
   * *   **TEST**
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  /**
   * @remarks
   * Specifies whether the API is public. Valid values:
   * 
   * *   **PUBLIC**: indicates that the API is public. If you set this parameter to PUBLIC, this API is displayed on the API List page in the console for all users after the API is published to the production environment.
   * *   **PRIVATE**: indicates that the API is private. If you set this parameter to PRIVATE, this API is not displayed in Alibaba Cloud Marketplace after the API group to which this API belongs is made available.
   * 
   * @example
   * PUBLIC
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
      stageName: 'string',
      visibility: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

