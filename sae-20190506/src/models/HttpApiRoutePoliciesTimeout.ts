// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiRoutePoliciesTimeout extends $dara.Model {
  enable?: boolean;
  /**
   * @example
   * s
   */
  timeUnit?: string;
  unitNum?: number;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      timeUnit: 'TimeUnit',
      unitNum: 'UnitNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      timeUnit: 'string',
      unitNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

