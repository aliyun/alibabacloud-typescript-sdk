// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncrByCacheOperateSyncRequest extends $dara.Model {
  defaultValue?: number;
  expireSeconds?: number;
  key?: string;
  step?: number;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      expireSeconds: 'ExpireSeconds',
      key: 'Key',
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'number',
      expireSeconds: 'number',
      key: 'string',
      step: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

