// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityRulesRequest extends $dara.Model {
  /**
   * @remarks
   * ID of the associated data quality evaluation task.
   * 
   * @example
   * 10000
   */
  dataQualityEvaluationTaskId?: number;
  /**
   * @remarks
   * Rule name for fuzzy matching.
   * 
   * @example
   * unit_test
   */
  name?: string;
  /**
   * @remarks
   * Page number for paginated query. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of entries per page. Default value: 10. Maximum value: 200.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * DataWorks workspace ID.
   * 
   * @example
   * 10002
   */
  projectId?: number;
  /**
   * @remarks
   * The unique identifier of the table to which the rule applies in Data Map.
   * 
   * @example
   * odps.unit_test.tb_unit_test
   */
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      dataQualityEvaluationTaskId: 'DataQualityEvaluationTaskId',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityEvaluationTaskId: 'number',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      tableGuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

