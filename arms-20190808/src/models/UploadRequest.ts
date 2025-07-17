// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UploadRequest extends $dara.Model {
  /**
   * @remarks
   * The version of the SourceMap file.
   * 
   * @example
   * 0.0.0
   */
  edition?: string;
  /**
   * @remarks
   * The string of the SourceMap file.
   * 
   * @example
   * test file content
   */
  file?: string;
  /**
   * @remarks
   * The name of the SourceMap file.
   * 
   * This parameter is required.
   * 
   * @example
   * test.js.map
   */
  fileName?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * Log on to the **ARMS console**. In the left-side navigation pane, choose **Browser Monitoring** > **Browser Monitoring**. On the Browser Monitoring page, click the name of an application. The URL in the address bar contains the process ID (PID) of the application. The PID is indicated in the pid=xxx format. The PID is usually percent encoded as xxx%40xxx. You must modify this value to remove the percent encoding. For example, if the PID in the URL is eb4zdose6v%409781be0f44d\\*\\*\\*\\*, you must replace %40 with @ to obtain eb4zdose6v@9781be0f44d\\*\\*\\*\\*.
   * 
   * This parameter is required.
   * 
   * @example
   * b590lhguqs@8cc3f6354******
   */
  pid?: string;
  /**
   * @remarks
   * The ID of the region to which the SourceMap file is uploaded.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * We recommend that you do not specify this parameter.
   * 
   * @example
   * null
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      edition: 'Edition',
      file: 'File',
      fileName: 'FileName',
      pid: 'Pid',
      regionId: 'RegionId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edition: 'string',
      file: 'string',
      fileName: 'string',
      pid: 'string',
      regionId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

