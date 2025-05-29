// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStreamingDataServicesResponseBodyServiceItems extends $dara.Model {
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2019-09-08T16:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * Last modified time
   * 
   * @example
   * 2019-09-08T17:00:00Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * Service description.
   * 
   * @example
   * test-adbpgss
   */
  serviceDescription?: string;
  /**
   * @remarks
   * Service ID.
   * 
   * @example
   * 1
   */
  serviceId?: string;
  /**
   * @remarks
   * Service IP.
   * 
   * @example
   * 192.168.0.1
   */
  serviceIp?: string;
  /**
   * @remarks
   * Whether it is a managed service.
   * 
   * @example
   * true
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * Service name.
   * 
   * @example
   * test-adbpgss
   */
  serviceName?: string;
  /**
   * @remarks
   * Service owner ID.
   * 
   * @example
   * 123
   */
  serviceOwnerId?: string;
  /**
   * @remarks
   * Service port.
   * 
   * @example
   * 5432
   */
  servicePort?: string;
  /**
   * @remarks
   * Service specification (in CU).
   * 
   * @example
   * 8
   */
  serviceSpec?: string;
  /**
   * @remarks
   * Service type, with the following value:
   * 
   * - **adbpgss**
   * 
   * @example
   * adbpgss
   */
  serviceType?: string;
  /**
   * @remarks
   * Service status, with the following values:
   * 
   * - Init: Initializing
   * 
   * - Running: In operation
   * 
   * - Exception: Abnormal
   * 
   * - Paused: Suspended
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
      serviceIp: 'ServiceIp',
      serviceManaged: 'ServiceManaged',
      serviceName: 'ServiceName',
      serviceOwnerId: 'ServiceOwnerId',
      servicePort: 'ServicePort',
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
      serviceIp: 'string',
      serviceManaged: 'boolean',
      serviceName: 'string',
      serviceOwnerId: 'string',
      servicePort: 'string',
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

