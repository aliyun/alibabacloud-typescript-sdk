// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasks } from "./ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasks";


export class ListDataQualityEvaluationTasksResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The data quality monitoring tasks.
   */
  dataQualityEvaluationTasks?: ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasks[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 131
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      dataQualityEvaluationTasks: 'DataQualityEvaluationTasks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityEvaluationTasks: { 'type': 'array', 'itemType': ListDataQualityEvaluationTasksResponseBodyPagingInfoDataQualityEvaluationTasks },
      pageNumber: 'string',
      pageSize: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataQualityEvaluationTasks)) {
      $dara.Model.validateArray(this.dataQualityEvaluationTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

