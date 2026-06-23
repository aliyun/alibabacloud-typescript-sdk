// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityResultsRequest extends $dara.Model {
  /**
   * @remarks
   * The start business date of the rule instance.
   * 
   * @example
   * 2024-05-01
   */
  bizdateFrom?: string;
  /**
   * @remarks
   * The end business date of the rule instance.
   * 
   * @example
   * 2024-05-04
   */
  bizdateTo?: string;
  /**
   * @remarks
   * The earliest time when the data quality evaluation result was generated.
   * 
   * @example
   * 1710239005403
   */
  createTimeFrom?: number;
  /**
   * @remarks
   * The latest time when the data quality evaluation result was generated.
   * 
   * @example
   * 1710239005403
   */
  createTimeTo?: number;
  /**
   * @remarks
   * The data quality evaluation task ID.
   * 
   * @example
   * 200001
   */
  dataQualityEvaluationTaskId?: number;
  /**
   * @remarks
   * The data quality evaluation task instance ID.
   * 
   * @example
   * 10001
   */
  dataQualityEvaluationTaskInstanceId?: number;
  /**
   * @remarks
   * The data quality rule ID.
   * 
   * @example
   * 100001
   */
  dataQualityRuleId?: number;
  /**
   * @remarks
   * The page number for the paging query. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size for the paging query. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 100
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      bizdateFrom: 'BizdateFrom',
      bizdateTo: 'BizdateTo',
      createTimeFrom: 'CreateTimeFrom',
      createTimeTo: 'CreateTimeTo',
      dataQualityEvaluationTaskId: 'DataQualityEvaluationTaskId',
      dataQualityEvaluationTaskInstanceId: 'DataQualityEvaluationTaskInstanceId',
      dataQualityRuleId: 'DataQualityRuleId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizdateFrom: 'string',
      bizdateTo: 'string',
      createTimeFrom: 'number',
      createTimeTo: 'number',
      dataQualityEvaluationTaskId: 'number',
      dataQualityEvaluationTaskInstanceId: 'number',
      dataQualityRuleId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

