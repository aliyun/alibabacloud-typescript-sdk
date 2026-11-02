// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchEditingProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The creation source. Valid values:
   * 
   * - OpenAPI: OpenAPI.
   * 
   * - AliyunConsole: Alibaba Cloud console.
   * 
   * - WebSDK: WebSDK.
   * 
   * @example
   * WebSDK
   */
  createSource?: string;
  /**
   * @remarks
   * The end time of the creation time. The time is in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
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
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the editing project. Default value: EditingProject.
   * 
   * Valid values:
   * 
   * - EditingProject: Standard editing project. This is the default value.
   * 
   * - LiveEditingProject: Live editing project.
   * 
   * @example
   * EditingProject
   */
  projectType?: string;
  /**
   * @remarks
   * The sorting method for the results. Valid values:
   * 
   * - CreationTime:Desc: Sort by creation time in descending order. This is the default value.
   * 
   * - CreationTime:Asc: Sort by creation time in ascending order.
   * 
   * @example
   * CreationTime:Desc
   */
  sortBy?: string;
  /**
   * @remarks
   * The start time of the creation time. The time is in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the cloud editing project. Separate multiple values with commas (,). By default, all cloud editing projects are retrieved.
   * 
   * Valid values:
   * 
   * - Draft: draft.
   * 
   * - Producing: producing.
   * 
   * - Produced: produced.
   * 
   * - ProduceFailed: production failed.
   * 
   * @example
   * Producing
   */
  status?: string;
  /**
   * @remarks
   * The templatetype. Valid values:
   * 
   * - Timeline: timeline.
   * 
   * - VETemplate: advanced template.
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

