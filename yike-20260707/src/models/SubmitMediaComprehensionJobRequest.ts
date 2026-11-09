// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitMediaComprehensionJobRequest extends $dara.Model {
  /**
   * @remarks
   * The input material. It is a JSON string with the following structure:
   * 
   * - Medias (Array<Object>, required): The list of media assets. It contains 1 to 10 elements. Each element includes the following fields:
   *   - Type (String, required): The type of the media asset. Valid values: video and image. The value is not case-sensitive.
   *   - Url (String, mutually exclusive with MediaId): The URL of the media asset. It must start with http:// or https:// and be up to 2,048 characters in length. Unregistered URLs are automatically registered as media assets.
   *   - MediaId (String, mutually exclusive with Url): The ID of the registered media asset. If both Url and MediaId are specified, MediaId takes precedence.
   * 
   * @example
   * {"Medias":[{"Type":"video","Url":"https://xxx.mp4"}]}
   */
  input?: string;
  /**
   * @remarks
   * The analysis parameters. It is a JSON string with a maximum length of 65,536 characters and a maximum of 20 fields.
   * 
   * @example
   * {"ProductName":"Quiet Blender Soymilk Maker","BrandName":"LiangChu","SellingPoints":["Low-noise blending","One-touch self-cleaning"]}
   */
  jobParams?: string;
  /**
   * @remarks
   * The job type. Valid values:
   * 
   * - VideoBreakdown: viral video breakdown. The Medias array must contain exactly one element with Type set to video.
   * - ProductRecognition: product image information recognition. All elements in the Medias array must have Type set to image.
   * 
   * @example
   * VideoBreakdown
   */
  jobType?: string;
  /**
   * @remarks
   * The custom parameters. It is a JSON string that is returned as-is in the callback result, such as newsKey. NotifyAddress is a system-reserved field for the callback URL. A callback is triggered to this URL after the job is completed.
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

