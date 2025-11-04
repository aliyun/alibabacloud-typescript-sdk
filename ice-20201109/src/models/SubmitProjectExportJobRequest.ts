// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitProjectExportJobRequest extends $dara.Model {
  /**
   * @remarks
   * The export type. Valid values:
   * 
   * *   **BaseTimeline**: exports the timeline.
   * *   **AdobePremierePro**: exports an Adobe Premiere Pro project.
   * 
   * @example
   * BaseTimeline
   */
  exportType?: string;
  /**
   * @remarks
   * The output path for the exported project and generated intermediate files, in JSON format. The export destination only supports OSS. Path fields:
   * 
   * *   **Bucket**: Required. The OSS bucket name.
   * *   **Prefix**: Optional. The path prefix. If not specified, it defaults to the root directory.
   * *   **Width**: Optional. The width of the output. The value must be a positive integer. If not provided, the system automatically calculates the value based on the input project or timeline.
   * *   **Height**: Optional. The height of the output. The value must be a positive integer. If not provided, the system automatically calculates the value based on the input project or timeline.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   * 	"Bucket": "example-bucket",
   *         "Prefix": "example_prefix",
   *         "Width": 1920,
   *         "Height": 1080
   * }
   */
  outputMediaConfig?: string;
  /**
   * @remarks
   * The ID of the online editing project.
   * >Notice: Either ProjectId or Timeline must be provided.
   * 
   * @example
   * *****67ae06542b9b93e0d1c387*****
   */
  projectId?: string;
  /**
   * @remarks
   * The timeline of the online editing job. For data structure, see [Timeline](https://help.aliyun.com/document_detail/198823.html).
   * >Notice: Either ProjectId or Timeline must be provided.
   * 
   * @example
   * {"VideoTracks":[{"VideoTrackClips":[{"MediaId":"****4d7cf14dc7b83b0e801c****"},{"MediaId":"****4d7cf14dc7b83b0e801c****"}]}]}
   */
  timeline?: string;
  /**
   * @remarks
   * The user-defined data in the JSON format.
   * 
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

