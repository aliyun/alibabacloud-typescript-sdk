// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceAccountsResponseBodyServiceAccounts extends $dara.Model {
  /**
   * @remarks
   * The name of the service account.
   * 
   * @example
   * bookinfo-reviews
   */
  name?: string;
  /**
   * @remarks
   * The namespace where the service account resides.
   * 
   * @example
   * default
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      namespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8349374D-0F22-5CAB-9DE3-8CCE8EFA71FF
   */
  requestId?: string;
  /**
   * @remarks
   * The list of service accounts.
   */
  serviceAccounts?: ListServiceAccountsResponseBodyServiceAccounts[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceAccounts: 'ServiceAccounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceAccounts: { 'type': 'array', 'itemType': ListServiceAccountsResponseBodyServiceAccounts },
    };
  }

  validate() {
    if(Array.isArray(this.serviceAccounts)) {
      $dara.Model.validateArray(this.serviceAccounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

