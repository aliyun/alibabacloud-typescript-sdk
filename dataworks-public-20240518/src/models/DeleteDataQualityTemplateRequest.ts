// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataQualityTemplateRequest extends $dara.Model {
  /**
   * @example
   * USER_DEFINED:2001
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

