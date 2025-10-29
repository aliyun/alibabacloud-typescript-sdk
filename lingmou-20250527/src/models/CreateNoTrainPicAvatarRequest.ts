// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNoTrainPicAvatarRequest extends $dara.Model {
  /**
   * @example
   * NORMAL/ENTHUSIASTIC
   */
  expressiveness?: string;
  /**
   * @example
   * FEMALE/MALE
   */
  gender?: string;
  /**
   * @example
   * true/false
   */
  generateAssets?: boolean;
  /**
   * @example
   * material/INPUT_INFER_PIC/Mt.CPQX3T6E25QU2/2e81e20797954440aed4da4264eb7494.webp
   */
  imageOssPath?: string;
  /**
   * @example
   * Token
   */
  jwtToken?: string;
  /**
   * @example
   * avatar
   */
  name?: string;
  /**
   * @example
   * true/false
   */
  transparent?: boolean;
  static names(): { [key: string]: string } {
    return {
      expressiveness: 'expressiveness',
      gender: 'gender',
      generateAssets: 'generateAssets',
      imageOssPath: 'imageOssPath',
      jwtToken: 'jwtToken',
      name: 'name',
      transparent: 'transparent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expressiveness: 'string',
      gender: 'string',
      generateAssets: 'boolean',
      imageOssPath: 'string',
      jwtToken: 'string',
      name: 'string',
      transparent: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

