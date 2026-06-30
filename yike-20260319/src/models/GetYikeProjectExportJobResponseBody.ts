// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetYikeProjectExportJobResponseBodyProjectExportJobExportResultSrtList extends $dara.Model {
  /**
   * @remarks
   * The download URL of the SRT file.
   * 
   * @example
   * http://xxx?Expires=
   */
  srtUrl?: string;
  /**
   * @remarks
   * The type enumeration. Currently, only VoiceOver is supported.
   * 
   * @example
   * VoiceOver
   */
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

export class GetYikeProjectExportJobResponseBodyProjectExportJobExportResult extends $dara.Model {
  /**
   * @remarks
   * The download URL of the audio file.
   * 
   * @example
   * http://....MP3?Expires=
   */
  audioUrl?: string;
  /**
   * @remarks
   * The download URL of the PR project file (not supported).
   * 
   * @example
   * ....
   */
  projectUrl?: string;
  /**
   * @remarks
   * The subtitle list.
   */
  srtList?: GetYikeProjectExportJobResponseBodyProjectExportJobExportResultSrtList[];
  /**
   * @remarks
   * The editing timeline (not supported).
   * 
   * @example
   * ....
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
      srtList: { 'type': 'array', 'itemType': GetYikeProjectExportJobResponseBodyProjectExportJobExportResultSrtList },
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

export class GetYikeProjectExportJobResponseBodyProjectExportJob extends $dara.Model {
  /**
   * @remarks
   * The task failure code.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The export result.
   */
  exportResult?: GetYikeProjectExportJobResponseBodyProjectExportJobExportResult;
  /**
   * @remarks
   * The project export type.
   * 
   * @example
   * PureAudio
   */
  exportType?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * ****cdb3e74639973036bc84****
   */
  jobId?: string;
  /**
   * @remarks
   * The task failure message.
   * 
   * @example
   * The specified parameter is not valid.
   */
  message?: string;
  /**
   * @remarks
   * The online editing project ID.
   * 
   * @example
   * ****fddd7748b58bf1d47e95****
   */
  projectId?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The custom data.
   * 
   * @example
   * {\\"testKey\\":\\"testValue\\"}
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
      exportResult: GetYikeProjectExportJobResponseBodyProjectExportJobExportResult,
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

export class GetYikeProjectExportJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The export task object.
   */
  projectExportJob?: GetYikeProjectExportJobResponseBodyProjectExportJob;
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
      projectExportJob: GetYikeProjectExportJobResponseBodyProjectExportJob,
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

