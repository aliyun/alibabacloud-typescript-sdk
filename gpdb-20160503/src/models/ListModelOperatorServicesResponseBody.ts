// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelOperatorServicesResponseBodyServices extends $dara.Model {
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * agdb-xxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The lifecycle status of the model operator service. The return value from the server is retained. Valid values:
   * 
   * - active: Running.
   * - locking: Locking.
   * - locked: Locked.
   * - unlocking: Unlocking.
   * - deleting: Deleting. The underlying resources are still being asynchronously cleaned up.
   * 
   * This field indicates the service status, which differs from the Creating, Running, Locked, and Deleting statuses of an API key. A transitional status does not indicate that the operation is complete. After a service is deleted, it no longer appears in the list.
   * 
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      serviceId: 'ServiceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceId: 'string',
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

export class ListModelOperatorServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * The list of services.
   */
  services?: ListModelOperatorServicesResponseBodyServices[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      services: 'Services',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      services: { 'type': 'array', 'itemType': ListModelOperatorServicesResponseBodyServices },
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

