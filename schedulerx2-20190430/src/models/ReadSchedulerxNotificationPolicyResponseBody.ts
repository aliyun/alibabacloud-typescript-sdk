// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadSchedulerxNotificationPolicyResponseBodyAccessDeniedDetail extends $dara.Model {
  /**
   * @remarks
   * The authentication operation.
   * 
   * @example
   * edas:ReadSchedulerxNotificationPolicy
   */
  authAction?: string;
  /**
   * @remarks
   * The principal name.
   * 
   * @example
   * 209312833131416xxx
   */
  authPrincipalDisplayName?: string;
  /**
   * @remarks
   * The account of the principal.
   * 
   * @example
   * 1827811800526xxx
   */
  authPrincipalOwnerId?: string;
  /**
   * @remarks
   * The principal type.
   * 
   * @example
   * SubUser
   */
  authPrincipalType?: string;
  /**
   * @remarks
   * The encoded diagnostic message.
   * 
   * @example
   * AQFn/cLPZ/3Cz0YxQkZBMjVGLTY0REUtNTlGNS05NzUwLTgyMUE4M0MwMTFDRQ==
   */
  encodedDiagnosticMessage?: string;
  /**
   * @remarks
   * The permission denial type.
   * 
   * @example
   * ImplicitDeny
   */
  noPermissionType?: string;
  /**
   * @remarks
   * The policy type.
   * 
   * @example
   * AccountLevelIdentityBasedPolicy
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      authAction: 'AuthAction',
      authPrincipalDisplayName: 'AuthPrincipalDisplayName',
      authPrincipalOwnerId: 'AuthPrincipalOwnerId',
      authPrincipalType: 'AuthPrincipalType',
      encodedDiagnosticMessage: 'EncodedDiagnosticMessage',
      noPermissionType: 'NoPermissionType',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authAction: 'string',
      authPrincipalDisplayName: 'string',
      authPrincipalOwnerId: 'string',
      authPrincipalType: 'string',
      encodedDiagnosticMessage: 'string',
      noPermissionType: 'string',
      policyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadSchedulerxNotificationPolicyResponseBodyDataRecordsReferenceApps extends $dara.Model {
  /**
   * @remarks
   * The ID of the task group.
   * 
   * @example
   * 123
   */
  appGroupId?: number;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * test-app
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * Notification strategy testing namespace
   */
  namespaceName?: string;
  /**
   * @remarks
   * The unique identifier of the namespace.
   * 
   * @example
   * 18271388-aa16-4eab-9a6f-55f65d7e4391
   */
  namespaceUid?: string;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'AppGroupId',
      groupId: 'GroupId',
      namespaceName: 'NamespaceName',
      namespaceUid: 'NamespaceUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'number',
      groupId: 'string',
      namespaceName: 'string',
      namespaceUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadSchedulerxNotificationPolicyResponseBodyDataRecords extends $dara.Model {
  /**
   * @remarks
   * The configuration of the notification policy.
   * 
   * @example
   * {
   *   "isUnifiedSetting": false,
   *   "timezone": "GMT+8",
   *   "webhookIsAtAll": "false",
   *   "timeRanges": {
   *     "webhook": [
   *       {
   *         "startTime": "08:00",
   *         "endTime": "18:00",
   *         "daysOfWeek": [
   *           1,
   *           2,
   *           3,
   *           4,
   *           5
   *         ]
   *       }
   *     ],
   *     "sms": [
   *       {
   *         "startTime": "08:00",
   *         "endTime": "18:00",
   *         "daysOfWeek": [
   *           1,
   *           2,
   *           3,
   *           4,
   *           5
   *         ]
   *       }
   *     ],
   *     "mail": [
   *       {
   *         "startTime": "08:00",
   *         "endTime": "18:00",
   *         "daysOfWeek": [
   *           1,
   *           2,
   *           3,
   *           4,
   *           5
   *         ]
   *       }
   *     ],
   *     "phone": [
   *       {
   *         "startTime": "08:00",
   *         "endTime": "18:00",
   *         "daysOfWeek": [
   *           1,
   *           2,
   *           3,
   *           4,
   *           5
   *         ]
   *       }
   *     ]
   *   }
   * }
   */
  channelTimeRange?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-09-17 11:21:01
   */
  createTime?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * 201576653956616970
   */
  creator?: string;
  /**
   * @remarks
   * The description of the notification policy.
   * 
   * @example
   * Monday-Friday only
   */
  description?: string;
  /**
   * @remarks
   * The name of the notification policy.
   * 
   * @example
   * test-weekdays
   */
  policyName?: string;
  /**
   * @remarks
   * The list of applications associated with the notification policy.
   */
  referenceApps?: ReadSchedulerxNotificationPolicyResponseBodyDataRecordsReferenceApps[];
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2025-09-17 11:21:01
   */
  updateTime?: string;
  /**
   * @remarks
   * The updater.
   * 
   * @example
   * 1144881807903942
   */
  updater?: string;
  static names(): { [key: string]: string } {
    return {
      channelTimeRange: 'ChannelTimeRange',
      createTime: 'CreateTime',
      creator: 'Creator',
      description: 'Description',
      policyName: 'PolicyName',
      referenceApps: 'ReferenceApps',
      updateTime: 'UpdateTime',
      updater: 'Updater',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelTimeRange: 'string',
      createTime: 'string',
      creator: 'string',
      description: 'string',
      policyName: 'string',
      referenceApps: { 'type': 'array', 'itemType': ReadSchedulerxNotificationPolicyResponseBodyDataRecordsReferenceApps },
      updateTime: 'string',
      updater: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.referenceApps)) {
      $dara.Model.validateArray(this.referenceApps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadSchedulerxNotificationPolicyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * When data that matches the query conditions has not been fully retrieved, the server returns nextToken. You can then use nextToken to continue retrieving the remaining data.
   * 
   * @example
   * O39nXKu5XafATl3/cJjSJw==
   */
  nextToken?: string;
  /**
   * @remarks
   * The data records.
   */
  records?: ReadSchedulerxNotificationPolicyResponseBodyDataRecords[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 42
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      records: 'Records',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      records: { 'type': 'array', 'itemType': ReadSchedulerxNotificationPolicyResponseBodyDataRecords },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadSchedulerxNotificationPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access denial details.
   */
  accessDeniedDetail?: ReadSchedulerxNotificationPolicyResponseBodyAccessDeniedDetail;
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * *
   */
  data?: ReadSchedulerxNotificationPolicyResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * unknown exception occurred
   */
  message?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 71BCC0E3-64B2-4B63-A870-AFB64EBCB5A7
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: ReadSchedulerxNotificationPolicyResponseBodyAccessDeniedDetail,
      code: 'number',
      data: ReadSchedulerxNotificationPolicyResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

