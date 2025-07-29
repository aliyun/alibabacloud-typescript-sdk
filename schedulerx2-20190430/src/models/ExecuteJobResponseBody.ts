// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The job instance ID.
   * 
   * @example
   * 11111111
   */
  jobInstanceId?: number;
  static names(): { [key: string]: string } {
    return {
      jobInstanceId: 'JobInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInstanceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The ID of the job instance that is returned if the request is successful.
   */
  data?: ExecuteJobResponseBodyData;
  /**
   * @remarks
   * The error message that is returned only if the corresponding error occurs.
   * 
   * @example
   * groupid not exist groupId: testSchedulerx.defaultGroup namespace: adcfc35d-e2fe-4fe9-bbaa-20e90ffc****
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4F68ABED-AC31-4412-9297-D9A8F0401108****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ExecuteJobResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

