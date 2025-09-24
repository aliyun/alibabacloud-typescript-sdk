// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPermissionListResponseBodyDataPermissionList extends $dara.Model {
  /**
   * @remarks
   * The time when the permission expired. If no value is returned, the permission is still valid. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC. For example, 2016-05-23T12:00:00Z indicates that the permission expired at 20:00:00 on May 23, 2016 (UTC+8).
   * 
   * @example
   * 2021-03-05T15:12Z
   */
  endTime?: string;
  /**
   * @remarks
   * The code of the permission.
   * 
   * @example
   * allow_synchronize_finance_identity
   */
  permissionCode?: string;
  /**
   * @remarks
   * The name of the permission.
   * 
   * @example
   * The management account shares the credit control identity with the member.
   */
  permissionName?: string;
  /**
   * @remarks
   * The time when the permission took effect. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC. For example, 2016-05-23T12:00:00Z indicates that the permission took effect at 20:00:00 on May 23, 2016 (UTC+8).
   * 
   * @example
   * 2021-03-02T15:12Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      permissionCode: 'PermissionCode',
      permissionName: 'PermissionName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      permissionCode: 'string',
      permissionName: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPermissionListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the relationship expired. If no value is returned, the relationship is still valid.
   * 
   * @example
   * 2021-03-06T15:12Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the management account.
   * 
   * @example
   * 1990699401005016
   */
  masterId?: number;
  /**
   * @remarks
   * The ID of the member.
   * 
   * @example
   * 1851253838840762
   */
  memberId?: number;
  /**
   * @remarks
   * The list of permissions.
   */
  permissionList?: QueryPermissionListResponseBodyDataPermissionList[];
  /**
   * @remarks
   * The type of the relationship. Valid values: FinancialManagement and FinancialTrusteeship.
   * 
   * @example
   * FinancialManagement
   */
  relationType?: string;
  /**
   * @remarks
   * The time when the relationship was established. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC. For example, 2016-05-23T12:00:00Z indicates that the relationship was established at 20:00:00 on May 23, 2016 (UTC+8).
   * 
   * @example
   * 2021-03-02T15:12Z
   */
  setupTime?: string;
  /**
   * @remarks
   * The time when the relationship took effect. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC. For example, 2016-05-23T12:00:00Z indicates that the relationship took effect at 20:00:00 on May 23, 2016 (UTC+8).
   * 
   * @example
   * 2021-03-02T15:12Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the relationship. For more information about valid values of this parameter, see the enumeration values of the RelationshipStatusEnum type in the following table.
   * 
   * @example
   * RELATED
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      masterId: 'MasterId',
      memberId: 'MemberId',
      permissionList: 'PermissionList',
      relationType: 'RelationType',
      setupTime: 'SetupTime',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      masterId: 'number',
      memberId: 'number',
      permissionList: { 'type': 'array', 'itemType': QueryPermissionListResponseBodyDataPermissionList },
      relationType: 'string',
      setupTime: 'string',
      startTime: 'string',
      state: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.permissionList)) {
      $dara.Model.validateArray(this.permissionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPermissionListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryPermissionListResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F6E29451-A3CD-4705-806D-0112D08F5C49
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryPermissionListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

