// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class NeuronDraftRecordUpdateCmd extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {}
   */
  content?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * app版本
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      id: 'id',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

