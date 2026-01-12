// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AcceptAgreementRequest extends $dara.Model {
  jwtToken?: string;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

