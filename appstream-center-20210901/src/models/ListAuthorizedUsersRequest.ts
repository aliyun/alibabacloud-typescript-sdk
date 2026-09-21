// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuthorizedUsersRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID used to filter authorization relationships.
   * 
   * Set this parameter when querying authorized users of a specific application. This parameter is not required when querying cloud browser groups or delivery group sets.
   * 
   * @example
   * -
   */
  appId?: string;
  /**
   * @remarks
   * The delivery group ID. When querying cloud browsers, set this parameter to the browser group ID.
   * 
   * Specify either this parameter or `AppInstanceGroupSetId`, but not both.
   * 
   * @example
   * big-3jm9d0abc00example
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The delivery group set ID.
   * 
   * Specify either this parameter or `AppInstanceGroupId`, but not both. When querying by set, omit `AppId` and `AppInstancePersistentId`.
   * 
   * @example
   * set-3jm9d0abc00example
   */
  appInstanceGroupSetId?: string;
  /**
   * @remarks
   * The persistent session ID used to filter authorization relationships. This parameter applies to delivery groups that use session-based authorization.
   * 
   * This parameter is not required when querying delivery group sets.
   * 
   * @example
   * ai-3jm9d0abc00example
   */
  appInstancePersistentId?: string;
  /**
   * @remarks
   * Performs an exact match by authorized username. If this parameter is not specified, results are not filtered by exact username.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The page number. This parameter is required. Pages start from page 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of records per page. This parameter is required. Maximum value: 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type. Set this parameter to `CloudBrowser` when querying authorized users of cloud browsers.
   * 
   * This parameter is required.
   * 
   * @example
   * CloudBrowser
   */
  productType?: string;
  /**
   * @remarks
   * Performs a fuzzy match by text contained in the authorized username.
   * 
   * @example
   * ali
   */
  userIdFuzzy?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupSetId: 'AppInstanceGroupSetId',
      appInstancePersistentId: 'AppInstancePersistentId',
      endUserId: 'EndUserId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
      userIdFuzzy: 'UserIdFuzzy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appInstanceGroupId: 'string',
      appInstanceGroupSetId: 'string',
      appInstancePersistentId: 'string',
      endUserId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productType: 'string',
      userIdFuzzy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

