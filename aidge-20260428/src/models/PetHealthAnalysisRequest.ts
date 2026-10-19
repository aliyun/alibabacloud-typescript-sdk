// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PetHealthAnalysisRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  imageUrl?: string[];
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
      imageUrl: 'ImageUrl',
      systemPrompt: 'SystemPrompt',
      userPrompt: 'UserPrompt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: { 'type': 'array', 'itemType': 'string' },
      systemPrompt: 'string',
      userPrompt: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageUrl)) {
      $dara.Model.validateArray(this.imageUrl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

