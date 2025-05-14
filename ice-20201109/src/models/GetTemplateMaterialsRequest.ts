// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateMaterialsRequest extends $dara.Model {
  /**
   * @remarks
   * The materials that you want to query.
   * 
   * @example
   * ["music.mp3","config.json","assets/1.jpg"]
   */
  fileList?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ****20b48fb04483915d4f2cd8ac****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      fileList: 'FileList',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileList: 'string',
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

