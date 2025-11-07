// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelTypeDetermineRequestHistory extends $dara.Model {
  content?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelTypeDetermineRequest extends $dara.Model {
  history?: ModelTypeDetermineRequestHistory[];
  /**
   * @remarks
   * This parameter is required.
   */
  inputText?: string;
  static names(): { [key: string]: string } {
    return {
      history: 'history',
      inputText: 'inputText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      history: { 'type': 'array', 'itemType': ModelTypeDetermineRequestHistory },
      inputText: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.history)) {
      $dara.Model.validateArray(this.history);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

