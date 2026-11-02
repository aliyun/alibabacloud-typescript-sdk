// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEditingProjectsRequest extends $dara.Model {
  /**
   * @remarks
   * The creation source. Valid values:
   * - OpenAPI
   * - AliyunConsole
   * - WebSDK
   * 
   * @example
   * OpenAPI
   */
  createSource?: string;
  /**
   * @remarks
   * The end time of the creation time range. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2022-02-02T23:59:59Z
   */
  endTime?: string;
  /**
   * @remarks
   * The search keyword. You can search for projects by task ID.
   * 
   * @example
   * ******6f36bc45d09a9d5cde49******
   */
  keyword?: string;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token for the next query.
   * 
   * @example
   * 8EqYpQbZ6Eh7+Zz8DxVYoQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The type of the editing project. Valid values:
   * - EditingProject: regular editing project.
   * - LiveEditingProject: live editing project.
   * 
   * @example
   * EditingProject
   */
  projectType?: string;
  /**
   * @remarks
   * The sorting method of the query results. Valid values:
   * - CreationTime:Desc: sorts the results in descending order of creation time. This is the default value.
   * - CreationTime:Asc: sorts the results in ascending order of creation time.
   * 
   * @example
   * CreationTime:Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The start time of the creation time range. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2017-12-21T08:00:01Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the cloud editing project. By default, all cloud editing projects are queried.
   * 
   * @example
   * Produced
   */
  status?: string;
  /**
   * @remarks
   * The templatetype. This parameter is required when you create a template-based cloud editing project. Default value: Timeline.
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

