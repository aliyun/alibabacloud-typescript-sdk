// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AuthDiagnosisRequestInstances extends $dara.Model {
  instance?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      instance: 'instance',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

