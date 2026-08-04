// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetCacheOperateSyncRequest extends $dara.Model {
  exceptVersion?: number;
  expireSeconds?: number;
  key?: string;
  setType?: string;
  valueClazz?: string;
  valueString?: string;
  static names(): { [key: string]: string } {
    return {
      exceptVersion: 'ExceptVersion',
      expireSeconds: 'ExpireSeconds',
      key: 'Key',
      setType: 'SetType',
      valueClazz: 'ValueClazz',
      valueString: 'ValueString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptVersion: 'number',
      expireSeconds: 'number',
      key: 'string',
      setType: 'string',
      valueClazz: 'string',
      valueString: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

