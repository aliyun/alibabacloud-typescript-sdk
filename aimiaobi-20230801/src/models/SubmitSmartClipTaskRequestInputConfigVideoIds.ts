// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitSmartClipTaskRequestInputConfigVideoIds extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss://default/bucket-name/filepath/video.mp4
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * fileKey
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

