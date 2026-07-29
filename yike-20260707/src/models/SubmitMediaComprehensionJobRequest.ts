// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitMediaComprehensionJobRequest extends $dara.Model {
  /**
   * @example
   * {"Medias":[{"Type":"video","Url":"https://xxx.mp4"}]}
   */
  input?: string;
  /**
   * @example
   * {"ProductName":"Quiet Blender Soymilk Maker","BrandName":"LiangChu","SellingPoints":["Low-noise blending","One-touch self-cleaning"]}
   */
  jobParams?: string;
  /**
   * @example
   * VideoBreakdown
   */
  jobType?: string;
  /**
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

