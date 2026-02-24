// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleRcaConfig extends $dara.Model {
  digitalEmployeeName?: string;
  enableRca?: boolean;
  static names(): { [key: string]: string } {
    return {
      digitalEmployeeName: 'digitalEmployeeName',
      enableRca: 'enableRca',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digitalEmployeeName: 'string',
      enableRca: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

