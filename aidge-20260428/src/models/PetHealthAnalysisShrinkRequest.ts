// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PetHealthAnalysisShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  imageUrlShrink?: string;
  /**
   * @example
   * 你是一名专业的宠物医生
   */
  systemPrompt?: string;
  /**
   * @example
   * 请分析这只宠物的健康状况
   */
  userPrompt?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrlShrink: 'ImageUrl',
      systemPrompt: 'SystemPrompt',
      userPrompt: 'UserPrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrlShrink: 'string',
      systemPrompt: 'string',
      userPrompt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

