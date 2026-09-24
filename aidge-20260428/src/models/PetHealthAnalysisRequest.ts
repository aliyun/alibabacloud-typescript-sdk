// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PetHealthAnalysisRequest extends $dara.Model {
  /**
   * @remarks
   * The list of HTTPS URLs of images to analyze. At least one accessible image must be provided.
   * 
   * This parameter is required.
   */
  imageUrl?: string[];
  /**
   * @remarks
   * The system prompt used to specify the response role or requirements. The value must comply with JSON string escaping rules.
   * 
   * @example
   * You are a professional veterinarian
   */
  systemPrompt?: string;
  /**
   * @remarks
   * The custom analysis requirement. If not specified or set to an empty string, excrement analysis is performed by default. The value must comply with JSON string escaping rules.
   * 
   * @example
   * Please analyze the health condition of this pet
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

