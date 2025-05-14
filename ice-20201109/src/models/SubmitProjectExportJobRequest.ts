// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitProjectExportJobRequest extends $dara.Model {
  /**
   * @example
   * BaseTimeline
   */
  exportType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {
   * 	"Bucket": "example-bucket",
   *     "Prefix": "example_prefix"
   * }
   */
  outputMediaConfig?: string;
  /**
   * @example
   * *****67ae06542b9b93e0d1c387*****
   */
  projectId?: string;
  /**
   * @example
   * {"VideoTracks":[{"VideoTrackClips":[{"MediaId":"****4d7cf14dc7b83b0e801c****"},{"MediaId":"****4d7cf14dc7b83b0e801c****"}]}]}
   */
  timeline?: string;
  /**
   * @example
   * {"NotifyAddress":"http://xx.xx.xxx","Key":"Valuexxx"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      exportType: 'ExportType',
      outputMediaConfig: 'OutputMediaConfig',
      projectId: 'ProjectId',
      timeline: 'Timeline',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportType: 'string',
      outputMediaConfig: 'string',
      projectId: 'string',
      timeline: 'string',
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

