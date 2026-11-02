// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchEditingProjectResponseBodyProjectList extends $dara.Model {
  /**
   * @remarks
   * The business configuration of the project. You can ignore this parameter for general editing projects.
   * 
   * @example
   * { "OutputMediaConfig" : { "StorageLocation": "test-bucket.oss-cn-shanghai.aliyuncs.com", "Path": "test-path" }, "OutputMediaTarget": "oss-object", "ReservationTime": "2021-06-21T08:05:00Z" }
   */
  businessConfig?: string;
  /**
   * @remarks
   * The business status of the project. You can ignore this parameter for general editing projects.
   * 
   * @example
   * Reserving
   */
  businessStatus?: string;
  /**
   * @remarks
   * The cover of the cloud editing project.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example-cover.jpg
   */
  coverURL?: string;
  /**
   * @remarks
   * The editing method of the cloud editing project. Valid values:
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
   * The creation time of the cloud editing project. The time is in ISO 8601 format and uses UTC (ending with Z).
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
   * sample description
   */
  description?: string;
  /**
   * @remarks
   * The total duration of the cloud editing project. Unit: seconds.
   * 
   * @example
   * 30.100000
   */
  duration?: number;
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
   * "EventTime":"2021-08-12T10:04:15Z","ErrorCode":"InvalidParameter","ErrorMessage":"The specified parameter \\"LiveStreamConfig\\" is not valid. specified parameter example is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The source of the last modification.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  modifiedSource?: string;
  /**
   * @remarks
   * The last modification time of the cloud editing project. The time is in ISO 8601 format and uses UTC (ending with Z).
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
   * The type of the editing project.
   * 
   * @example
   * EditingProject
   */
  projectType?: string;
  /**
   * @remarks
   * The list of all cloud editing project statuses. Valid values:
   * - Draft
   * - Editing
   * - Producing
   * - Produced
   * - ProduceFailed
   * 
   * @example
   * PRODUCE_FAILED
   */
  status?: string;
  /**
   * @remarks
   * The templatetype.
   * 
   * @example
   * Timeline
   */
  templateType?: string;
  /**
   * @remarks
   * The timeline of the cloud editing project.
   * 
   * @example
   * {"VideoTracks":[{"VideoTrackClips":[{"MediaId":"****4d7cf14dc7b83b0e801c****"},{"MediaId":"****4d7cf14dc7b83b0e801c****"}]}]}
   */
  timeline?: string;
  /**
   * @remarks
   * The title of the cloud editing project.
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
   * The maximum number of records returned by the current request. The number of records on each page before the last page is the value of MaxResults. Examples: Valid example: 10, 10, 5. Invalid example: 10, 5, 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that indicates the position where the current call stops reading. An empty value indicates that all data has been read.
   * 
   * @example
   * null
   */
  nextToken?: string;
  /**
   * @remarks
   * The cloud editing project list.
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
   * The total number of data entries that meet the request conditions. This parameter is optional and is not returned by default.
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

