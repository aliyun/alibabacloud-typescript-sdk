// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitYikeProjectExportJobRequest extends $dara.Model {
  /**
   * @remarks
   * The export type of the editing project. Valid values:
   * - PureAudio: pure audio (the export result returns a pure audio file and a subtitle file).
   * 
   * @example
   * PureAudio
   */
  exportType?: string;
  /**
   * @remarks
   * The ID of the online editing project.
   * 
   * @example
   * 01a6adbbd181437eb5030d3d93e0182d
   */
  projectId?: string;
  /**
   * @remarks
   * The custom parameter in JSON string format. The callback result carries this parameter as-is (for example, newsKey).
   * The system reserved field NotifyAddress specifies the callback URL. After the task is complete, a callback is sent to this URL. Example: {"NotifyAddress": "http://xxx.callback.url"}
   * 
   * @example
   * {\\"newsKey\\":\\"NEWS_20260420_001\\",\\"key1\\":\\"value1\\", \\"NotifyAddress\\":\\"https://cms.example.com/callback/video-task\\"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      exportType: 'ExportType',
      projectId: 'ProjectId',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportType: 'string',
      projectId: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

