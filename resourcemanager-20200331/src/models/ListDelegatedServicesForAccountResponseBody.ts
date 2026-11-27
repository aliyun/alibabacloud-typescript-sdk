// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDelegatedServicesForAccountResponseBodyDelegatedServicesDelegatedService extends $dara.Model {
  delegationEnabledTime?: string;
  servicePrincipal?: string;
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
  delegatedServices?: ListDelegatedServicesForAccountResponseBodyDelegatedServices;
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delegatedServices: ListDelegatedServicesForAccountResponseBodyDelegatedServices,
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

