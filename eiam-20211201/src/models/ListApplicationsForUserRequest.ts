// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsForUserRequest extends $dara.Model {
  /**
   * @remarks
   * The list of application IDs. A single request supports up to 100 application IDs.
   * 
   * @example
   * ["app_mkv7rgt4d7i4u7zqtzev2mxxxx"]
   */
  applicationIds?: string[];
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The query mode. Default value: **OnlyDirect**. Valid values:
   * 
   * - OnlyDirect: Queries only the direct permissions of the account, which are the applications directly assigned to the account.
   * - IncludeInherit: Queries both the direct permissions and inherited permissions of the account. Inherited permissions refer to the permissions that the account inherits from its parent organizations or the groups to which it belongs.
   * 
   * @example
   * OnlyDirect
   */
  queryMode?: string;
  /**
   * @remarks
   * The account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryMode: 'QueryMode',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryMode: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

