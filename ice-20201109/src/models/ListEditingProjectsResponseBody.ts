// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEditingProjectsResponseBodyProjectList extends $dara.Model {
  /**
   * @remarks
   * The business configuration of the project. This parameter can be ignored for general editing projects.
   * 
   * @example
   * {}
   */
  businessConfig?: string;
  /**
   * @remarks
   * The business status of the project. This parameter can be ignored for general editing projects.
   * 
   * @example
   * {}
   */
  businessStatus?: string;
  /**
   * @remarks
   * The thumbnail URL of the online editing project.
   * 
   * @example
   * https://xxx.com/cover/xxx.jpg
   */
  coverURL?: string;
  /**
   * @remarks
   * The method for editing the online editing project. Valid values:
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
   * The time when the online editing project was created.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the online editing project.
   */
  description?: string;
  /**
   * @remarks
   * The error code returned if the production of the online editing project failed.
   * 
   * @example
   * InvalidParameter
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the production of the online editing project failed.
   * 
   * @example
   * The specified parameter \\"LiveStreamConfig\\" is not valid. specified parameter example is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The method for modifying the online editing project last time.
   * 
   * @example
   * OpenAPI
   */
  modifiedSource?: string;
  /**
   * @remarks
   * The time when the online editing project was last modified.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The ID of the online editing project.
   * 
   * @example
   * ****fddd7748b58bf1d47e95****
   */
  projectId?: string;
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
   * The status of the online editing project. Valid values:
   * 
   * \\- Draft
   * 
   * \\- Editing
   * 
   * \\- Producing
   * 
   * \\- Produced
   * 
   * \\- ProduceFailed
   * 
   * @example
   * Produced
   */
  status?: string;
  /**
   * @remarks
   * The template type. Valid values:
   * 
   * *   Timeline: a regular template.
   * *   VETemplate: an advanced template.
   * 
   * @example
   * Timeline
   */
  templateType?: string;
  /**
   * @remarks
   * The title of the online editing project.
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
   * The maximum number of entries returned.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * This parameter is required.
   * 
   * @example
   * Nzv3rcKla9wHUGua9YXHNA==
   */
  nextToken?: string;
  /**
   * @remarks
   * The queried online editing projects.
   */
  projectList?: ListEditingProjectsResponseBodyProjectList[];
  /**
   * @remarks
   * The request ID.
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

