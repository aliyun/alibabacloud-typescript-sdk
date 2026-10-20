// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRayJobShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the Ray job. Exact match is supported.
   * 
   * @example
   * myrayjob
   */
  name?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The submission ID of the Ray job.
   * 
   * @example
   * rj-xxxxxxxxxxx
   */
  submissionId?: string;
  /**
   * @remarks
   * The submission time range.
   */
  submitTimeShrink?: string;
  /**
   * @remarks
   * The ID of the data development node.
   * 
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

