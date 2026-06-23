// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityEvaluationTaskInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The business start date of the quality evaluation task.
   * 
   * @example
   * 2024-04-01
   */
  bizdateFrom?: string;
  /**
   * @remarks
   * The business end date of the quality evaluation task.
   * 
   * @example
   * 2024-05-01
   */
  bizdateTo?: string;
  /**
   * @remarks
   * The earliest start time of the data quality evaluation task instance.
   * 
   * @example
   * 1710239005403
   */
  createTimeFrom?: number;
  /**
   * @remarks
   * The latest start time of the data quality evaluation task instance.
   * 
   * @example
   * 1710239005403
   */
  createTimeTo?: number;
  /**
   * @remarks
   * The ID of the data quality evaluation task.
   * 
   * @example
   * 10000
   */
  dataQualityEvaluationTaskId?: number;
  /**
   * @remarks
   * The page number for the list pagination query. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size for the list pagination query. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The unique ID of the table in Data Map.
   * 
   * @example
   * odps.unit_test.tb_unit_test
   */
  tableGuid?: string;
  /**
   * @remarks
   * The TriggerClient in TriggerContext.
   * 
   * @example
   * CWF2
   */
  triggerClient?: string;
  /**
   * @remarks
   * The TriggerClientId in TriggerContext.
   * 
   * @example
   * 1001
   */
  triggerClientId?: string;
  static names(): { [key: string]: string } {
    return {
      bizdateFrom: 'BizdateFrom',
      bizdateTo: 'BizdateTo',
      createTimeFrom: 'CreateTimeFrom',
      createTimeTo: 'CreateTimeTo',
      dataQualityEvaluationTaskId: 'DataQualityEvaluationTaskId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      tableGuid: 'TableGuid',
      triggerClient: 'TriggerClient',
      triggerClientId: 'TriggerClientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizdateFrom: 'string',
      bizdateTo: 'string',
      createTimeFrom: 'number',
      createTimeTo: 'number',
      dataQualityEvaluationTaskId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      tableGuid: 'string',
      triggerClient: 'string',
      triggerClientId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

