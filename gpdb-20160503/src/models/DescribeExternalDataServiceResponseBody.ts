// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExternalDataServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2019-09-08T16:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The last modification time.
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
   * The service description.
   * 
   * @example
   * pxf test
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
   * The service name.
   * 
   * @example
   * test-pxf
   */
  serviceName?: string;
  /**
   * @remarks
   * The service specification (unit: CU).
   * 
   * @example
   * 8
   */
  serviceSpec?: string;
  /**
   * @remarks
   * The service status. Valid values:
   * 
   * - Init: The service is being initialized.
   * 
   * - Running: The service is running.
   * 
   * - Exception: An exception occurred.
   * 
   * - Paused: The service is paused.
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
      serviceName: 'ServiceName',
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
      serviceName: 'string',
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

