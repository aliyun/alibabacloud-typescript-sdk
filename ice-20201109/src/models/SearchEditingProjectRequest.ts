// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchEditingProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The source of the project.
   * 
   * \\-OpenAPI
   * 
   * \\-AliyunConsole
   * 
   * \\-WebSDK
   * 
   * Valid values:
   * 
   * *   AliyunConsole: The project is created in the Alibaba Cloud console.
   * *   WebSDK: The project is created by using the SDK for Web.
   * *   OpenAPI: The project is created by calling API operations.
   * 
   * @example
   * WebSDK
   */
  createSource?: string;
  /**
   * @remarks
   * The end of the time range to query. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the editing project. Default value: EditingProject. Valid values:
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
   * The sorting rule of results. Valid values:
   * 
   * \\- CreationTime:Desc (default): The results are sorted in reverse chronological order based on the creation time.
   * 
   * \\- CreationTime:Asc: The results are sorted in chronological order based on the creation time.
   * 
   * @example
   * CreationTime:Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the online editing project. Separate multiple values with commas (,). By default, all online editing projects are queried.
   * 
   * Valid values:
   * 
   * \\-Draft
   * 
   * \\-Producing
   * 
   * \\-Produced
   * 
   * \\-ProduceFailed
   * 
   * @example
   * Producing
   */
  status?: string;
  /**
   * @remarks
   * The template type. Valid values:
   * 
   * \\-Timeline
   * 
   * \\-VETemplate
   * 
   * Valid values:
   * 
   * *   Timeline: regular template.
   * *   VETemplate: advanced template.
   * *   None: No template is used.
   * 
   * @example
   * Timeline
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      createSource: 'CreateSource',
      endTime: 'EndTime',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
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
      pageNo: 'number',
      pageSize: 'number',
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

