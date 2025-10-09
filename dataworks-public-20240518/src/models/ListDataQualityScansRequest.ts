// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataQualityScansRequest extends $dara.Model {
  /**
   * @remarks
   * The data quality scan task name for fuzzy match.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
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
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The list of sorting fields. Supports fields such as last modified time and creation time. Format: "SortField+SortOrder (Desc/Asc)", where Asc is the default. Valid values:
   * 
   * *   ModifyTime (Desc/Asc)
   * *   CreateTime (Desc/Asc)
   * *   Id (Desc/Asc)
   * 
   * @example
   * ModifyTime Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * Fuzzy match for the monitored table name.
   * 
   * @example
   * video_album
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      sortBy: 'string',
      table: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

