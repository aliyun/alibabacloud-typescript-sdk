// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterUserRequest extends $dara.Model {
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

