// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryLocalFileUploadJobRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * You can view the **ID** of the current instance on the **Instance Overview** page in the IoT Platform console. If the instance has an ID, you must specify this ID. Otherwise, the call fails.
   * 
   * > If the public instance does not have an ID, see [Obtain an instance ID](https://help.aliyun.com/document_detail/267533.html).
   * 
   * @example
   * iot-cn-n6w1y59****
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * The ID of the local video recording upload task. The task is created by calling [CreateLocalFileUploadJob](https://help.aliyun.com/document_detail/363002.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 1ec1a****5d0435fbc0****34f6f139d
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

