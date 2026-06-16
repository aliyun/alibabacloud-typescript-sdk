// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRayJobRequestSubmitTime extends $dara.Model {
  /**
   * @example
   * 1780018822000
   */
  endTime?: number;
  /**
   * @example
   * 1780017822000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRayJobRequest extends $dara.Model {
  /**
   * @example
   * myrayjob
   */
  name?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * rj-xxxxxxxxxxx
   */
  submissionId?: string;
  submitTime?: ListRayJobRequestSubmitTime;
  /**
   * @example
   * TSK-db8b870d901e443ba0aebba40c923e02
   */
  taskBizId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      submissionId: 'submissionId',
      submitTime: 'submitTime',
      taskBizId: 'taskBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNum: 'number',
      pageSize: 'number',
      submissionId: 'string',
      submitTime: ListRayJobRequestSubmitTime,
      taskBizId: 'string',
    };
  }

  validate() {
    if(this.submitTime && typeof (this.submitTime as any).validate === 'function') {
      (this.submitTime as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

