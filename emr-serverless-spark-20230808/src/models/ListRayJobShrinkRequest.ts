// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRayJobShrinkRequest extends $dara.Model {
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
  submitTimeShrink?: string;
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
      submitTimeShrink: 'submitTime',
      taskBizId: 'taskBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNum: 'number',
      pageSize: 'number',
      submissionId: 'string',
      submitTimeShrink: 'string',
      taskBizId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

