// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransformInput extends $dara.Model {
  input?: any;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'input',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: 'any',
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

