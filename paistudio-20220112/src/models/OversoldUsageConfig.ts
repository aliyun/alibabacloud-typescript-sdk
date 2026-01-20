// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OversoldUsageConfig extends $dara.Model {
  disabled?: boolean;
  disabledBy?: string;
  static names(): { [key: string]: string } {
    return {
      disabled: 'Disabled',
      disabledBy: 'DisabledBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disabled: 'boolean',
      disabledBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

