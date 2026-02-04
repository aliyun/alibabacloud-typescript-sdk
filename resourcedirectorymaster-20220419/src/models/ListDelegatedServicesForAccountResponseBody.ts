// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDelegatedServicesForAccountResponseBodyDelegatedServicesDelegatedService extends $dara.Model {
  /**
   * @remarks
   * The time when the member was specified as a delegated administrator account.
   * 
   * @example
   * 1616652684164
   */
  delegationEnabledTime?: string;
  /**
   * @remarks
   * The identifier of the trusted service.
   * 
   * @example
   * cloudfw.aliyuncs.com
   */
  servicePrincipal?: string;
  /**
   * @remarks
   * The status of the trusted service. Valid values:
   * 
   * *   ENABLED: enabled
   * *   DISABLED: disabled
   * 
   * @example
   * ENABLED
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      delegationEnabledTime: 'DelegationEnabledTime',
      servicePrincipal: 'ServicePrincipal',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delegationEnabledTime: 'string',
      servicePrincipal: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDelegatedServicesForAccountResponseBodyDelegatedServices extends $dara.Model {
  delegatedService?: ListDelegatedServicesForAccountResponseBodyDelegatedServicesDelegatedService[];
  static names(): { [key: string]: string } {
    return {
      delegatedService: 'DelegatedService',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delegatedService: { 'type': 'array', 'itemType': ListDelegatedServicesForAccountResponseBodyDelegatedServicesDelegatedService },
    };
  }

  validate() {
    if(Array.isArray(this.delegatedService)) {
      $dara.Model.validateArray(this.delegatedService);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDelegatedServicesForAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the trusted services.
   * 
   * > If the value of this parameter is empty, the member is not specified as a delegated administrator account.
   */
  delegatedServices?: ListDelegatedServicesForAccountResponseBodyDelegatedServices;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D9C03B94-9396-4794-A74B-13DC437556A6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      delegatedServices: 'DelegatedServices',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delegatedServices: ListDelegatedServicesForAccountResponseBodyDelegatedServices,
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.delegatedServices && typeof (this.delegatedServices as any).validate === 'function') {
      (this.delegatedServices as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

