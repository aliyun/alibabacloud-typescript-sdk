// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchEditingProjectResponseBodyProjectList extends $dara.Model {
  /**
   * @remarks
   * The business configuration of the project. This parameter can be ignored for general editing projects.
   * 
   * @example
   * { "OutputMediaConfig" : { "StorageLocation": "test-bucket.oss-cn-shanghai.aliyuncs.com", "Path": "test-path" }, "OutputMediaTarget": "oss-object", "ReservationTime": "2021-06-21T08:05:00Z" }
   */
  businessConfig?: string;
  /**
   * @remarks
   * The business status of the project. This parameter can be ignored for general editing projects. Valid values:
   * 
   * Valid values:
   * 
   * *   BroadCasting:
   * *   ReservationCanceled
   * *   LiveFinished
   * *   LoadingFailed
   * *   Reserving
   * 
   * @example
   * Reserving
   */
  businessStatus?: string;
  /**
   * @remarks
   * The thumbnail URL of the online editing project.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example-cover.jpg
   */
  coverURL?: string;
  /**
   * @remarks
   * The method for editing the online editing project.
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
   * 
   * @example
   * sample description
   */
  description?: string;
  /**
   * @remarks
   * The total length of the online editing project. Unit: seconds.
   * 
   * @example
   * 30.100000
   */
  duration?: number;
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
   * "EventTime":"2021-08-12T10:04:15Z","ErrorCode":"InvalidParameter","ErrorMessage":"The specified parameter \\"LiveStreamConfig\\" is not valid. specified parameter example is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The method used when the online editing project was last modified.
   * 
   * @example
   * 2017-01-11T12:00:00Z
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
   * The type of the editing project.
   * 
   * Valid values:
   * 
   * *   LiveEditingProject: a live stream editing project.
   * *   EditingProject: a regular editing project.
   * 
   * @example
   * EditingProject
   */
  projectType?: string;
  /**
   * @remarks
   * The status of the online editing project. Valid values:
   * 
   * \\-Draft
   * 
   * \\-Editing
   * 
   * \\-Producing
   * 
   * \\-Produced
   * 
   * \\-ProduceFailed
   * 
   * Valid values:
   * 
   * *   Draft
   * *   Produced
   * *   Editing
   * *   Producing
   * *   ProduceFailed
   * 
   * @example
   * PRODUCE_FAILED
   */
  status?: string;
  /**
   * @remarks
   * The type of the template.
   * 
   * @example
   * Timeline
   */
  templateType?: string;
  /**
   * @remarks
   * The timeline of the online editing project.
   * 
   * @example
   * {"VideoTracks":[{"VideoTrackClips":[{"MediaId":"****4d7cf14dc7b83b0e801c****"},{"MediaId":"****4d7cf14dc7b83b0e801c****"}]}]}
   */
  timeline?: string;
  /**
   * @remarks
   * The title of the online editing project.
   * 
   * @example
   * title
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
      duration: 'Duration',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      modifiedSource: 'ModifiedSource',
      modifiedTime: 'ModifiedTime',
      projectId: 'ProjectId',
      projectType: 'ProjectType',
      status: 'Status',
      templateType: 'TemplateType',
      timeline: 'Timeline',
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
      duration: 'number',
      errorCode: 'string',
      errorMessage: 'string',
      modifiedSource: 'string',
      modifiedTime: 'string',
      projectId: 'string',
      projectType: 'string',
      status: 'string',
      templateType: 'string',
      timeline: 'string',
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

export class SearchEditingProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned on a single page. The value is set to the maximum number of entries returned on each page except for the last page.
   * 
   * Examples:
   * 
   * Valid example: 10,10,5. Invalid example: 10,5,10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
   * 
   * @example
   * null
   */
  nextToken?: string;
  /**
   * @remarks
   * The queried online editing projects.
   */
  projectList?: SearchEditingProjectResponseBodyProjectList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****9262E3DA-07FA-4862-FCBB6BC61D08*****
   */
  requestId?: string;
  /**
   * @remarks
   * Optional. The total number of entries returned. By default, this parameter is not returned.
   * 
   * @example
   * 110
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      projectList: 'ProjectList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      projectList: { 'type': 'array', 'itemType': SearchEditingProjectResponseBodyProjectList },
      requestId: 'string',
      totalCount: 'number',
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

