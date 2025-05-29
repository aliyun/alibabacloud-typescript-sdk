// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStreamingDataServiceResponseBody extends $dara.Model {
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
   * The request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
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
   * The IP address of the service.
   * 
   * @example
   * 192.168.0.1
   */
  serviceIp?: string;
  /**
   * @remarks
   * The service is managed by other aliyun product or not.
   * 
   * @example
   * False
   */
  serviceManaged?: boolean;
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
   * The service account uid of the aliyun product
   * 
   * @example
   * 123456
   */
  serviceOwnerId?: string;
  /**
   * @remarks
   * The port number of the service.
   * 
   * @example
   * 5432
   */
  servicePort?: number;
  /**
   * @remarks
   * The specifications of the service.
   * 
   * @example
   * 2
   */
  serviceSpec?: string;
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
      requestId: 'RequestId',
      serviceDescription: 'ServiceDescription',
      serviceId: 'ServiceId',
      serviceIp: 'ServiceIp',
      serviceManaged: 'ServiceManaged',
      serviceName: 'ServiceName',
      serviceOwnerId: 'ServiceOwnerId',
      servicePort: 'ServicePort',
      serviceSpec: 'ServiceSpec',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      modifyTime: 'string',
      requestId: 'string',
      serviceDescription: 'string',
      serviceId: 'string',
      serviceIp: 'string',
      serviceManaged: 'boolean',
      serviceName: 'string',
      serviceOwnerId: 'string',
      servicePort: 'number',
      serviceSpec: 'string',
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

