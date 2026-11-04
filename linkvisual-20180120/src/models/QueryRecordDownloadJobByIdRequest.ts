// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRecordDownloadJobByIdRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can view the ID of the current instance on the **Instance Overview** tab in the IoT Platform console.
   * 
   * This parameter is required.
   * 
   * @example
   * Iot-r******
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * The ID of the cloud record download task.
   * 
   * This parameter is required.
   * 
   * @example
   * w2s******
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      iotInstanceId: 'IotInstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iotInstanceId: 'string',
      jobId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

