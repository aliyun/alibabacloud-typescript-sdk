// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployLocationTreeRequest extends $dara.Model {
  forceUpdate?: boolean;
  jwtToken?: string;
  svcId?: number;
  static names(): { [key: string]: string } {
    return {
      forceUpdate: 'ForceUpdate',
      jwtToken: 'JwtToken',
      svcId: 'SvcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceUpdate: 'boolean',
      jwtToken: 'string',
      svcId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

