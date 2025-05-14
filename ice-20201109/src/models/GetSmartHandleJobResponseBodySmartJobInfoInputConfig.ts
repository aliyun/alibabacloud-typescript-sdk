// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmartHandleJobResponseBodySmartJobInfoInputConfig extends $dara.Model {
  /**
   * @remarks
   * The OSS URL or the ID of the material in the media asset library.
   * 
   * @example
   * oss://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4 或 ******11-DB8D-4A9A-875B-275798******
   */
  inputFile?: string;
  static names(): { [key: string]: string } {
    return {
      inputFile: 'InputFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputFile: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

