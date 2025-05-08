// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPromptTemplatesResponseBodyPromptTemplates extends $dara.Model {
  /**
   * @remarks
   * The template content
   */
  content?: string;
  /**
   * @remarks
   * The template name.
   */
  name?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * d6935b7efbe34d11b13df9307151cf8c
   */
  promptTemplateId?: string;
  /**
   * @remarks
   * The template type.
   * 
   * @example
   * "System"
   */
  type?: string;
  /**
   * @remarks
   * The variables of the template.
   */
  variables?: string[];
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      name: 'name',
      promptTemplateId: 'promptTemplateId',
      type: 'type',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      name: 'string',
      promptTemplateId: 'string',
      type: 'string',
      variables: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

