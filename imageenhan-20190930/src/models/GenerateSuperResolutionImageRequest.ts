// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateSuperResolutionImageRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://viapi-test.oss-cn-shanghai.aliyuncs.com/test/xxx/1025.jpg
   */
  imageUrl?: string;
  /**
   * @example
   * 95
   */
  outputFormat?: string;
  /**
   * @example
   * jpg
   */
  outputQuality?: number;
  /**
   * @example
   * 2
   */
  scale?: number;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      outputFormat: 'OutputFormat',
      outputQuality: 'OutputQuality',
      scale: 'Scale',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      outputFormat: 'string',
      outputQuality: 'number',
      scale: 'number',
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

