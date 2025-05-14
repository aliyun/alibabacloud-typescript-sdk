// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEditingProjectsRequest extends $dara.Model {
  /**
   * @remarks
   * The method for creating the online editing project. Valid values:
   * 
   * \\- OpenAPI
   * 
   * \\- AliyunConsole
   * 
   * \\- WebSDK
   * 
   * @example
   * OpenAPI
   */
  createSource?: string;
  /**
   * @remarks
   * The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2022-02-02T23:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The search keyword. You can search by job ID.
   * 
   * @example
   * ******6f36bc45d09a9d5cde49******
   */
  keyword?: string;
  /**
   * @remarks
   * The number of entries per page. A maximum of 100 entries can be returned on each page.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * 8EqYpQbZ6Eh7+Zz8DxVYoQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The type of the editing project. Valid values:
   * 
   * *   EditingProject: a regular editing project.
   * *   LiveEditingProject: a live stream editing project.
   * 
   * @example
   * EditingProject
   */
  projectType?: string;
  /**
   * @remarks
   * The order of sorting of the results. Valid values:
   * 
   * *   CreationTime:Desc (default): sorts the results in reverse chronological order.
   * *   CreationTime:Asc: sorts the results in chronological order.
   * 
   * @example
   * CreationTime:Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2017-12-21T08:00:01Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the online editing project. By default, online editing projects in all states are queried.
   * 
   * @example
   * Produced
   */
  status?: string;
  /**
   * @remarks
   * The template type. This parameter is required if you create a template-based online editing project. Default value: Timeline.
   * 
   * *
   * *
   * 
   * Valid values:
   * 
   * *   Timeline: a regular template.
   * *   VETemplate: an advanced template.
   * *   None: general editing.
   * 
   * @example
   * None
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      createSource: 'CreateSource',
      endTime: 'EndTime',
      keyword: 'Keyword',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      projectType: 'ProjectType',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      status: 'Status',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createSource: 'string',
      endTime: 'string',
      keyword: 'string',
      maxResults: 'string',
      nextToken: 'string',
      projectType: 'string',
      sortBy: 'string',
      startTime: 'string',
      status: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

