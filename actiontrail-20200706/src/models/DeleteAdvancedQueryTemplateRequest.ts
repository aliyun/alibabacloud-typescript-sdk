// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAdvancedQueryTemplateRequest extends $dara.Model {
  /**
   * @example
   * utpl-QNL3dpYkQcyjZxrIQCciqQ
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

