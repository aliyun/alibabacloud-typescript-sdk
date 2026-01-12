// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAreaMapRequest extends $dara.Model {
  id?: number;
  jwtToken?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      jwtToken: 'JwtToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
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

