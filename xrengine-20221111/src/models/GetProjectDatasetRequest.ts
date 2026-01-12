// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectDatasetRequest extends $dara.Model {
  jwtToken?: string;
  ossKey?: string;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
      ossKey: 'OssKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
      ossKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

