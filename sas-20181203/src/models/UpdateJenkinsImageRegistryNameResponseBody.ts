// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateJenkinsImageRegistryNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result. Valid values:
   * - **true**: Processing succeeded.
   * - **false**: Processing failed.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique ID for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 4347E985-6E64-467B-96EC-30D4EA9E****
   */
  requestId?: string;
  /**
   * @remarks
   * The time consumed for the execution. Unit: seconds.
   * 
   * @example
   * 1
   */
  timeCost?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      timeCost: 'TimeCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      httpStatusCode: 'number',
      requestId: 'string',
      timeCost: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

