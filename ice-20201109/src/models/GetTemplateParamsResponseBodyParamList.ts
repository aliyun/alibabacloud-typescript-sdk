// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateParamsResponseBodyParamList extends $dara.Model {
  /**
   * @remarks
   * The original subtitle content.
   */
  content?: string;
  /**
   * @remarks
   * The thumbnail URL of the original material.
   */
  coverUrl?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * video1
   */
  key?: string;
  /**
   * @remarks
   * The URL of the original material.
   */
  mediaUrl?: string;
  /**
   * @remarks
   * The material type.
   * 
   * Valid values:
   * 
   * *   Video
   * *   Text
   * *   Image
   * 
   * @example
   * Image
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      coverUrl: 'CoverUrl',
      key: 'Key',
      mediaUrl: 'MediaUrl',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      coverUrl: 'string',
      key: 'string',
      mediaUrl: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

