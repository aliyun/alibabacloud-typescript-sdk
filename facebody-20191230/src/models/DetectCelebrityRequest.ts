// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectCelebrityRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://viapi-oss.oss-cn-shanghai.aliyuncs.com/doc/facebody/xxx.jpg
   */
  imageURL?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

