// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteModelTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The model group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * mt-xxxx
   */
  modelTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      modelTemplateId: 'ModelTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

