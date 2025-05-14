// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VodPackagingConfigDrmProvider extends $dara.Model {
  encryptionMethod?: string;
  IV?: string;
  systemIds?: string[];
  url?: string;
  static names(): { [key: string]: string } {
    return {
      encryptionMethod: 'EncryptionMethod',
      IV: 'IV',
      systemIds: 'SystemIds',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptionMethod: 'string',
      IV: 'string',
      systemIds: { 'type': 'array', 'itemType': 'string' },
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.systemIds)) {
      $dara.Model.validateArray(this.systemIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

