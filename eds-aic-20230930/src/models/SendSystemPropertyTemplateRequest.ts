// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendSystemPropertyTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The list of instance IDs.
   */
  androidInstanceIds?: string[];
  /**
   * @remarks
   * The property template ID.
   * 
   * @example
   * ap-angyvganxlf****
   */
  templateId?: string;
  /**
   * @remarks
   * The list of property template IDs. If multiple templates are provided, the specified instances are randomly matched with all the provided property templates.
   */
  templateIds?: string[];
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
      templateId: 'TemplateId',
      templateIds: 'TemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
      templateId: 'string',
      templateIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIds)) {
      $dara.Model.validateArray(this.androidInstanceIds);
    }
    if(Array.isArray(this.templateIds)) {
      $dara.Model.validateArray(this.templateIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

