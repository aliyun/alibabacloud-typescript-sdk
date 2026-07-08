// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingProjectsRequest extends $dara.Model {
  /**
   * @remarks
   * A parameter that specifies the time range to filter by. The time must be in UTC and follow the ISO 8601 format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2024-10-03T02:18:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Page number. The first page is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of items per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Project ID
   * 
   * @example
   * project-422bc38dfgh5eb44149f135ef76304f63b
   */
  projectId?: string;
  /**
   * @remarks
   * Project name
   * 
   * @example
   * idata_content
   */
  projectName?: string;
  /**
   * @remarks
   * Start time of the time range filter. Use ISO 8601 format in UTC, such as yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2024-09-29T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      projectName: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

