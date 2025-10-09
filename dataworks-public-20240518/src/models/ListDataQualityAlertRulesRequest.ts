// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityAlertRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data quality monitor that the alert rule targets.
   * 
   * @example
   * 10001
   */
  dataQualityScanId?: number;
  /**
   * @remarks
   * The page number of the results.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  projectId?: number;
  /**
   * @remarks
   * The list of sorting fields. Supports fields such as last modified time and creation time. Format: "SortField+SortOrder (Desc/Asc)", where Asc is the default. Valid values:
   * 
   * *   CreateTime (Desc/Asc)
   * *   Id (Desc/Asc)
   * 
   * @example
   * CreateTime Desc
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      dataQualityScanId: 'DataQualityScanId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataQualityScanId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

