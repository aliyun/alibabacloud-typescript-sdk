// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitMediaComprehensionJobRequest extends $dara.Model {
  /**
   * @remarks
   * The input material. JSON string with the following structure:
   * 
   * - Medias (Array<Object>, required): The list of media assets. Contains 1 to 10 elements. Each element includes the following fields:
   *   - Type (String, required): The media asset type. Valid values: video or image (case-insensitive).
   *   - Url (String, either Url or MediaId is required): The URL of the media asset. The URL must start with http:// or https:// and cannot exceed 2048 characters in length. Unregistered URLs are automatically registered as media assets.
   *   - MediaId (String, either Url or MediaId is required): The ID of a registered media asset. If both Url and MediaId are specified, MediaId takes precedence.
   * 
   * @example
   * {"Medias":[{"Type":"video","Url":"https://xxx.mp4"}]}
   */
  input?: string;
  /**
   * @remarks
   * The analysis parameters. JSON string. The total length cannot exceed 65536 characters, and the total number of fields cannot exceed 20.
   * 
   * @example
   * {"ProductName":"Quiet Blender Soymilk Maker","BrandName":"LiangChu","SellingPoints":["Low-noise blending","One-touch self-cleaning"]}
   */
  jobParams?: string;
  /**
   * @remarks
   * The job type.
   * 
   * - VideoBreakdown: viral video breakdown. Requires Medias to contain exactly 1 element with Type=video.
   * - ProductRecognition: product image information recognition. Requires all elements in Medias to have Type=image.
   * 
   * @example
   * VideoBreakdown
   */
  jobType?: string;
  /**
   * @remarks
   * The custom parameters. JSON string that is returned as-is in the callback result (for example, newsKey). The system reserved field NotifyAddress specifies the callback URL. The callback is triggered after the job is completed.
   * 
   * @example
   * {"NotifyAddress": "http://xxx.callback.url"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      jobParams: 'JobParams',
      jobType: 'JobType',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: 'string',
      jobParams: 'string',
      jobType: 'string',
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

