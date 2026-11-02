// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEditingProjectsResponseBodyProjectList extends $dara.Model {
  /**
   * @remarks
   * The business configuration of the project. You can ignore this parameter for regular editing projects.
   * 
   * @example
   * {}
   */
  businessConfig?: string;
  /**
   * @remarks
   * The business status of the project. You can ignore this parameter for regular editing projects.
   * 
   * @example
   * {}
   */
  businessStatus?: string;
  /**
   * @remarks
   * The URL of the cover image for the cloud editing project.
   * 
   * @example
   * https://xxx.com/cover/xxx.jpg
   */
  coverURL?: string;
  /**
   * @remarks
   * The creation source of the cloud editing project. Valid values:
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
   * The creation time of the cloud editing project. The time is in the ISO 8601 standard and is displayed in UTC.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the cloud editing project.
   * 
   * @example
   * Project description
   */
  description?: string;
  /**
   * @remarks
   * The error code returned when the production of the cloud editing project fails.
   * 
   * @example
   * InvalidParameter
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the production of the cloud editing project fails.
   * 
   * @example
   * The specified parameter \\"LiveStreamConfig\\" is not valid. specified parameter example is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The source of the last modification.
   * 
   * @example
   * OpenAPI
   */
  modifiedSource?: string;
  /**
   * @remarks
   * The last modification time of the cloud editing project. The time is in the ISO 8601 standard and is displayed in UTC.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The ID of the cloud editing project.
   * 
   * @example
   * ****fddd7748b58bf1d47e95****
   */
  projectId?: string;
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
   * The status of the cloud editing project. Valid values:
   * - Draft
   * - Editing
   * - Producing
   * - Produced
   * - ProduceFailed
   * 
   * @example
   * Produced
   */
  status?: string;
  /**
   * @remarks
   * The templatetype. Valid values:
   * - Timeline: regular template.
   * - VETemplate: advanced template.
   * 
   * @example
   * Timeline
   */
  templateType?: string;
  /**
   * @remarks
   * The title of the cloud editing project.
   * 
   * @example
   * Project title
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      businessConfig: 'BusinessConfig',
      businessStatus: 'BusinessStatus',
      coverURL: 'CoverURL',
      createSource: 'CreateSource',
      createTime: 'CreateTime',
      description: 'Description',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      modifiedSource: 'ModifiedSource',
      modifiedTime: 'ModifiedTime',
      projectId: 'ProjectId',
      projectType: 'ProjectType',
      status: 'Status',
      templateType: 'TemplateType',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessConfig: 'string',
      businessStatus: 'string',
      coverURL: 'string',
      createSource: 'string',
      createTime: 'string',
      description: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      modifiedSource: 'string',
      modifiedTime: 'string',
      projectId: 'string',
      projectType: 'string',
      status: 'string',
      templateType: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEditingProjectsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records returned for the current request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. An empty value indicates that all data has been read.
   * 
   * This parameter is required.
   * 
   * @example
   * Nzv3rcKla9wHUGua9YXHNA==
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of cloud editing projects.
   */
  projectList?: ListEditingProjectsResponseBodyProjectList[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * *****ACB-44F2-5F2D-88D7-1283E70*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      projectList: 'ProjectList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      projectList: { 'type': 'array', 'itemType': ListEditingProjectsResponseBodyProjectList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.projectList)) {
      $dara.Model.validateArray(this.projectList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

