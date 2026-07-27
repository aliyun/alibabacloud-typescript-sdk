// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityResultsByRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the yyyy-MM-dd HH:mm:ss format.
   * 
   * You must configure this parameter together with the StartDate parameter. The time range to query cannot exceed 7 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-09-22 00:00:00
   */
  endDate?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 20.
   * 
   * This parameter is required.
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
   * 123456
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the compute engine or data source for which you want to perform data quality monitoring.
   * 
   * This parameter is required.
   * 
   * @example
   * autotest
   */
  projectName?: string;
  /**
   * @remarks
   * The ID of the monitoring rule. You can use the rule ID and a partition filter to query the monitoring results of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 152322134
   */
  ruleId?: number;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the yyyy-MM-dd HH:mm:ss format.
   * 
   * You must configure this parameter together with the EndDate parameter. The time range to query cannot exceed 7 days.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-09-20 00:00:00
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      ruleId: 'RuleId',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      projectName: 'string',
      ruleId: 'number',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

