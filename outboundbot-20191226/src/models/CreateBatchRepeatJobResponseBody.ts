// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBatchRepeatJobResponseBodyJobGroup extends $dara.Model {
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  id?: string;
  /**
   * @example
   * 1
   */
  minConcurrency?: number;
  /**
   * @example
   * 3
   */
  priority?: string;
  /**
   * @example
   * 30
   */
  ringingDuration?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      minConcurrency: 'MinConcurrency',
      priority: 'Priority',
      ringingDuration: 'RingingDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      minConcurrency: 'number',
      priority: 'string',
      ringingDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchRepeatJobResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * {}
   */
  jobGroup?: CreateBatchRepeatJobResponseBodyJobGroup;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobGroup: 'JobGroup',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobGroup: CreateBatchRepeatJobResponseBodyJobGroup,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.jobGroup && typeof (this.jobGroup as any).validate === 'function') {
      (this.jobGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

