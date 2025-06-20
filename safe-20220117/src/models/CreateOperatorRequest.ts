// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOperatorRequest extends $dara.Model {
  authKey?: string;
  authSign?: string;
  bgObject?: string;
  bgSystem?: string;
  code?: string;
  curEmpId?: string;
  name?: string;
  noCheck?: boolean;
  noRisk?: boolean;
  reqTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      authSign: 'AuthSign',
      bgObject: 'BgObject',
      bgSystem: 'BgSystem',
      code: 'Code',
      curEmpId: 'CurEmpId',
      name: 'Name',
      noCheck: 'NoCheck',
      noRisk: 'NoRisk',
      reqTimestamp: 'ReqTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      authSign: 'string',
      bgObject: 'string',
      bgSystem: 'string',
      code: 'string',
      curEmpId: 'string',
      name: 'string',
      noCheck: 'boolean',
      noRisk: 'boolean',
      reqTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

