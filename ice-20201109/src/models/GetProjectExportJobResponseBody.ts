// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectExportJobResponseBodyProjectExportJobExportResultSrtList extends $dara.Model {
  srtUrl?: string;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      srtUrl: 'SrtUrl',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      srtUrl: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectExportJobResponseBodyProjectExportJobExportResult extends $dara.Model {
  audioUrl?: string;
  /**
   * @remarks
   * The file URL of the exported project, which is typically an authenticated OSS URL. This field is returned when the export type is AdobePremierePro.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example_prefix/exported_project_1e8c39a502c3436c84f88290cd713bf3.zip?Expires=1750331685&....
   */
  projectUrl?: string;
  srtList?: GetProjectExportJobResponseBodyProjectExportJobExportResultSrtList[];
  /**
   * @remarks
   * The online editing timeline. This field is returned when the export type is BaseTimeline. For more information about the structure, see [Timeline configuration](https://help.aliyun.com/document_detail/198823.html).
   * 
   * @example
   * {"VideoTracks":[{"VideoTrackClips":[{"Type":"Video","MediaId":"****4d7cf14dc7b83b0e801c****","MediaURL":"https://test-bucket.oss-cn-shanghai.aliyuncs.com/test.mp4","TimelineIn":0.0,"TimelineOut":5.0,"In":0.0,"Out":5.0,"Speed":1.0,"Duration":5.0,"VirginDuration":13.334,"Height":1.0,"Width":1.0,"X":0.0,"Y":0.0}]}]}
   */
  timeline?: string;
  static names(): { [key: string]: string } {
    return {
      audioUrl: 'AudioUrl',
      projectUrl: 'ProjectUrl',
      srtList: 'SrtList',
      timeline: 'Timeline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioUrl: 'string',
      projectUrl: 'string',
      srtList: { 'type': 'array', 'itemType': GetProjectExportJobResponseBodyProjectExportJobExportResultSrtList },
      timeline: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.srtList)) {
      $dara.Model.validateArray(this.srtList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectExportJobResponseBodyProjectExportJob extends $dara.Model {
  /**
   * @remarks
   * The error code of the project export task.
   * >Notice: Check this field when the task fails.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The export result.
   */
  exportResult?: GetProjectExportJobResponseBodyProjectExportJobExportResult;
  /**
   * @remarks
   * The type of the project export. Valid values:
   * - **BaseTimeline**: timeline.
   * - **AdobePremierePro**: Adobe Premiere Pro project.
   * 
   * @example
   * BaseTimeline
   */
  exportType?: string;
  /**
   * @remarks
   * The ID of the project export task.
   * 
   * @example
   * ****cdb3e74639973036bc84****
   */
  jobId?: string;
  /**
   * @remarks
   * The error message of the project export task.
   * 
   * >Notice: Check this field when the task fails.
   * 
   * @example
   * The specified parameter is not valid.
   */
  message?: string;
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
   * The status of the project export task. Valid values:
   * - **Init**: initial state.
   * - **Processing**: processing.
   * - **Success**: succeeded.
   * - **Failed**: failed.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The custom settings in JSON format.
   * 
   * @example
   * {"NotifyAddress":"http://xx.xx.xxx","Key":"Valuexxx"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      exportResult: 'ExportResult',
      exportType: 'ExportType',
      jobId: 'JobId',
      message: 'Message',
      projectId: 'ProjectId',
      status: 'Status',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      exportResult: GetProjectExportJobResponseBodyProjectExportJobExportResult,
      exportType: 'string',
      jobId: 'string',
      message: 'string',
      projectId: 'string',
      status: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.exportResult && typeof (this.exportResult as any).validate === 'function') {
      (this.exportResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectExportJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The project export task.
   */
  projectExportJob?: GetProjectExportJobResponseBodyProjectExportJob;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****2876-6263-4B75-8F2C-CD0F7FCF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      projectExportJob: 'ProjectExportJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectExportJob: GetProjectExportJobResponseBodyProjectExportJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.projectExportJob && typeof (this.projectExportJob as any).validate === 'function') {
      (this.projectExportJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

