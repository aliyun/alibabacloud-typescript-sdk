// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VacancyDetectionRequest extends $dara.Model {
  /**
   * @remarks
   * The HTTPS URL of the single image to be detected. Arrays or other image encodings are not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/shelf.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The optional system prompt.
   * 
   * @example
   * You are a helpful assistant.
   */
  systemPrompt?: string;
  /**
   * @remarks
   * The optional user prompt. If this parameter is empty, the complete vacancy detection prompt is used. Plain text and JSON containing only text in messages or content are supported.
   * 
   * @example
   * Detect vacancies and underfilled areas on the shelf
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
      imageUrl: 'string',
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

