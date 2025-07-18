// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IdpAttrMapConfigItem extends $dara.Model {
  source?: string;
  target?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      target: 'Target',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      target: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

