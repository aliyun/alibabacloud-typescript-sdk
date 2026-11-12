// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExternalDataServicesResponseBodyServiceItems extends $dara.Model {
  /**
   * @remarks
   * The time when the service was created.
   * 
   * @example
   * 2019-09-08T16:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the service was last modified.
   * 
   * @example
   * 2019-09-08T17:00:00Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The description of the service.
   * 
   * @example
   * test-adbpgss
   */
  serviceDescription?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * 1
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * test-adbpgss
   */
  serviceName?: string;
  /**
   * @remarks
   * The specifications of the service. Unit: compute units (CUs).
   * 
   * @example
   * 2
   */
  serviceSpec?: string;
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * *   pxf
   * 
   * @example
   * pxf
   */
  serviceType?: string;
  /**
   * @remarks
   * The status of the service. Valid values:
   * 
   * *   Init
   * *   Running
   * *   Exception
   * *   Paused
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      modifyTime: 'ModifyTime',
      serviceDescription: 'ServiceDescription',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceSpec: 'ServiceSpec',
      serviceType: 'ServiceType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifyTime: 'string',
      serviceDescription: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceSpec: 'string',
      serviceType: 'string',
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

export class ListExternalDataServicesResponseBody extends $dara.Model {
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
   * The request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
  /**
   * @remarks
   * The queried services.
   */
  serviceItems?: ListExternalDataServicesResponseBodyServiceItems[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      serviceItems: 'ServiceItems',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      requestId: 'string',
      serviceItems: { 'type': 'array', 'itemType': ListExternalDataServicesResponseBodyServiceItems },
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.serviceItems)) {
      $dara.Model.validateArray(this.serviceItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

