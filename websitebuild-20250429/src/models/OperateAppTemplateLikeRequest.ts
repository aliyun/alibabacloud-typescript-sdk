// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateAppTemplateLikeRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the item is collected
   */
  liked?: boolean;
  /**
   * @remarks
   * Template ID
   * 
   * @example
   * K191WHV12URYQN06
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      liked: 'Liked',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liked: 'boolean',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

