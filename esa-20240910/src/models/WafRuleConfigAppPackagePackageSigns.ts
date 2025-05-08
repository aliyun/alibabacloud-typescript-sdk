// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WafRuleConfigAppPackagePackageSigns extends $dara.Model {
  name?: string;
  sign?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      sign: 'Sign',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      sign: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

