// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScopePredefinedScopesPredefinedScope extends $dara.Model {
  /**
   * @remarks
   * The description of the permission.
   * 
   * @example
   * Obtains the OpenID of the user. This is the default scope and cannot be deleted.
   */
  description?: string;
  /**
   * @remarks
   * The name of the permission.
   * 
   * @example
   * openid
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

export class ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScopePredefinedScopes extends $dara.Model {
  predefinedScope?: ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScopePredefinedScopesPredefinedScope[];
  static names(): { [key: string]: string } {
    return {
      predefinedScope: 'PredefinedScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScope: { 'type': 'array', 'itemType': ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScopePredefinedScopesPredefinedScope },
    };
  }

  validate() {
    if(Array.isArray(this.predefinedScope)) {
      $dara.Model.validateArray(this.predefinedScope);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScope extends $dara.Model {
  /**
   * @remarks
   * The information about the permissions that are granted to the external application.
   */
  predefinedScopes?: ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScopePredefinedScopes;
  static names(): { [key: string]: string } {
    return {
      predefinedScopes: 'PredefinedScopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      predefinedScopes: ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScopePredefinedScopes,
    };
  }

  validate() {
    if(this.predefinedScopes && typeof (this.predefinedScopes as any).validate === 'function') {
      (this.predefinedScopes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExternalApplicationsResponseBodyExternalApplicationsExternalApplication extends $dara.Model {
  /**
   * @remarks
   * The name of the external application principal. The value is in the `<app_name>@app.<account_id>.onaliyun.com` format.
   * 
   * @example
   * GiteePrd@app.153082740420****.onaliyun.com
   */
  appPrincipalName?: string;
  /**
   * @remarks
   * The time when the external application was installed. The value is a timestamp.
   * 
   * @example
   * 1603693318000
   */
  createDate?: string;
  /**
   * @remarks
   * The information about the permissions that are granted to the external application.
   */
  delegatedScope?: ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScope;
  /**
   * @remarks
   * The display name of the external application.
   * 
   * @example
   * GiteeAliyun
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the external application.
   * 
   * @example
   * 407426893752729****
   */
  foreignAppId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account for which the external application was installed.
   * 
   * @example
   * 173082740420****
   */
  tenantId?: string;
  /**
   * @remarks
   * The update time of the external application. The value is a timestamp.
   * 
   * @example
   * 1603693518000
   */
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      appPrincipalName: 'AppPrincipalName',
      createDate: 'CreateDate',
      delegatedScope: 'DelegatedScope',
      displayName: 'DisplayName',
      foreignAppId: 'ForeignAppId',
      tenantId: 'TenantId',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appPrincipalName: 'string',
      createDate: 'string',
      delegatedScope: ListExternalApplicationsResponseBodyExternalApplicationsExternalApplicationDelegatedScope,
      displayName: 'string',
      foreignAppId: 'string',
      tenantId: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    if(this.delegatedScope && typeof (this.delegatedScope as any).validate === 'function') {
      (this.delegatedScope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExternalApplicationsResponseBodyExternalApplications extends $dara.Model {
  externalApplication?: ListExternalApplicationsResponseBodyExternalApplicationsExternalApplication[];
  static names(): { [key: string]: string } {
    return {
      externalApplication: 'ExternalApplication',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalApplication: { 'type': 'array', 'itemType': ListExternalApplicationsResponseBodyExternalApplicationsExternalApplication },
    };
  }

  validate() {
    if(Array.isArray(this.externalApplication)) {
      $dara.Model.validateArray(this.externalApplication);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExternalApplicationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the external applications.
   */
  externalApplications?: ListExternalApplicationsResponseBodyExternalApplications;
  /**
   * @remarks
   * Indicates whether the response is truncated. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isTruncated?: boolean;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * >  This parameter is returned only when `IsTruncated` is `true`.
   * 
   * @example
   * EXAMPLE
   */
  marker?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 936E1D9C-157D-45BD-8A3B-81C0716EB077
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      externalApplications: 'ExternalApplications',
      isTruncated: 'IsTruncated',
      marker: 'Marker',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalApplications: ListExternalApplicationsResponseBodyExternalApplications,
      isTruncated: 'boolean',
      marker: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.externalApplications && typeof (this.externalApplications as any).validate === 'function') {
      (this.externalApplications as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

