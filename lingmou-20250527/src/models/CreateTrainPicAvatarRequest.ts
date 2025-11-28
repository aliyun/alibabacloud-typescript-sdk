// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrainPicAvatarRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FEMALE
   */
  gender?: string;
  /**
   * @example
   * true
   */
  generateAssets?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * material/INPUT_TRAIN_PIC/Mt.CQEJ2DQ6BBYU2/2.jpg
   */
  imageOssPath?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * M16vSG46Pby9HWOrFSZ7QaQA
   */
  templateId?: string;
  /**
   * @example
   * false
   */
  transparent?: boolean;
  static names(): { [key: string]: string } {
    return {
      gender: 'gender',
      generateAssets: 'generateAssets',
      imageOssPath: 'imageOssPath',
      name: 'name',
      templateId: 'templateId',
      transparent: 'transparent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gender: 'string',
      generateAssets: 'boolean',
      imageOssPath: 'string',
      name: 'string',
      templateId: 'string',
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

