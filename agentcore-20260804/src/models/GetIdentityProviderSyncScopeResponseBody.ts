// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdentityProviderSyncScopeResponseBodyDataSelectedDepartments extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the selected department still exists. A value of false indicates that the selection is invalid and the synchronization scope must be reconfirmed.
   * 
   * @example
   * true
   */
  exists?: boolean;
  /**
   * @remarks
   * The unique identifier of the department returned by the identity provider. When querying the sub-departments of this node, use this value as parentDepartmentId.
   * 
   * @example
   * 10001
   */
  id?: string;
  /**
   * @remarks
   * The name of the department returned by the identity provider.
   * 
   * @example
   * R&D Department
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      exists: 'exists',
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exists: 'boolean',
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderSyncScopeResponseBodyDataSyncScope extends $dara.Model {
  /**
   * @remarks
   * When the mode is SelectedDepartments, this list must contain at least one non-empty department ID, which should be obtained from ListIdentityProviderDepartments. When the mode is AllAuthorized, pass an empty array or omit this parameter.
   * 
   * @example
   * ["10001"]
   */
  departmentIds?: string[];
  /**
   * @remarks
   * AllAuthorized: the entire authorized scope, subject to the application\\"s address book authorization limits. SelectedDepartments: the selected departments and all their sub-departments. When explicitly submitting syncScope, a valid mode must be provided and is verified by the backend.
   * 
   * @example
   * SelectedDepartments
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      departmentIds: 'departmentIds',
      mode: 'mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentIds: { 'type': 'array', 'itemType': 'string' },
      mode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.departmentIds)) {
      $dara.Model.validateArray(this.departmentIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderSyncScopeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The user count estimation status for the synchronization scope. The count is available only when the status is Ready. A missing count in other states cannot be considered as 0.
   * 
   * @example
   * Ready
   */
  estimateStatus?: string;
  /**
   * @remarks
   * The estimated number of users in the saved synchronization scope. This is returned only when estimateStatus is Ready and the downstream identity provider provides this value. It does not represent the number of users that have already been synchronized.
   * 
   * @example
   * 12
   */
  estimatedUserCount?: number;
  /**
   * @remarks
   * The estimated number of departments including sub-departments. This is returned only when estimateStatus is Ready and the downstream identity provider provides this value.
   * 
   * @example
   * 2
   */
  expandedDepartmentCount?: number;
  /**
   * @remarks
   * The names and validity of the saved selected departments. This can be an empty array when the mode is AllAuthorized. An empty array does not indicate that the organization has no departments.
   * 
   * @example
   * [{"id":"10001","name":"R&D Department","exists":true}]
   */
  selectedDepartments?: GetIdentityProviderSyncScopeResponseBodyDataSelectedDepartments[];
  /**
   * @remarks
   * The saved synchronization scope of the downstream identity provider. AllAuthorized indicates the address book scope authorized for the application.
   * 
   * @example
   * {"mode":"SelectedDepartments","departmentIds":["10001"]}
   */
  syncScope?: GetIdentityProviderSyncScopeResponseBodyDataSyncScope;
  static names(): { [key: string]: string } {
    return {
      estimateStatus: 'estimateStatus',
      estimatedUserCount: 'estimatedUserCount',
      expandedDepartmentCount: 'expandedDepartmentCount',
      selectedDepartments: 'selectedDepartments',
      syncScope: 'syncScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      estimateStatus: 'string',
      estimatedUserCount: 'number',
      expandedDepartmentCount: 'number',
      selectedDepartments: { 'type': 'array', 'itemType': GetIdentityProviderSyncScopeResponseBodyDataSelectedDepartments },
      syncScope: GetIdentityProviderSyncScopeResponseBodyDataSyncScope,
    };
  }

  validate() {
    if(Array.isArray(this.selectedDepartments)) {
      $dara.Model.validateArray(this.selectedDepartments);
    }
    if(this.syncScope && typeof (this.syncScope as any).validate === 'function') {
      (this.syncScope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderSyncScopeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status code for the current API request. SUCCESS indicates that the current request is successful, which does not mean that the asynchronous synchronization task is completed.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The business data returned by the current request.
   * 
   * @example
   * {"syncScope":{"mode":"SelectedDepartments","departmentIds":["10001"]},"selectedDepartments":[{"id":"10001","name":"R&D Department","exists":true}],"estimateStatus":"Ready","expandedDepartmentCount":2,"estimatedUserCount":12}
   */
  data?: GetIdentityProviderSyncScopeResponseBodyData;
  /**
   * @remarks
   * The HTTP status code for the current API request, which does not indicate the execution result of an asynchronous task.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message for the current API request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request. Provide this value when troubleshooting issues.
   * 
   * @example
   * 01234567-89AB-CDEF-0123-456789ABCDEF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the current API request is successful. To check whether an asynchronous task is completed, query the task status.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetIdentityProviderSyncScopeResponseBodyData,
      httpStatusCode: 'number',
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

