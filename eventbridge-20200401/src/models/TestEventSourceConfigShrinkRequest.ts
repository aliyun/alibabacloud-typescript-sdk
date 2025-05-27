// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestEventSourceConfigShrinkRequest extends $dara.Model {
  sourceMySQLParametersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      sourceMySQLParametersShrink: 'SourceMySQLParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceMySQLParametersShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

