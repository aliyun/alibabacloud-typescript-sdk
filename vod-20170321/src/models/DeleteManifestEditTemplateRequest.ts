// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteManifestEditTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ManifestEdit template to be deleted. Only letters, digits, underscores (_), and hyphens (-) are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * 9c6581d59240de5e258ffa4c71a3e01b
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

