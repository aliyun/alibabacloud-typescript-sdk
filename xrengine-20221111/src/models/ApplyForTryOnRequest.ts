// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyForTryOnRequest extends $dara.Model {
  content?: string;
  jwtToken?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      jwtToken: 'JwtToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      jwtToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

