// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrainPicAvatarRequest extends $dara.Model {
  bizType?: string;
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
      bizType: 'bizType',
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
      bizType: 'string',
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

