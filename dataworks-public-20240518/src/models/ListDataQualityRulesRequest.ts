// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data quality monitoring task that is associated with the rule.
   * 
   * @example
   * 10000
   */
  dataQualityEvaluationTaskId?: number;
  /**
   * @remarks
   * The name of the rule. Fuzzy match is supported.
   * 
   * @example
   * unit_test
   */
  name?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 200.
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
   * 10002
   */
  projectId?: number;
  /**
   * @remarks
   * The ID of the table that is limited by the rule in Data Map.
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

