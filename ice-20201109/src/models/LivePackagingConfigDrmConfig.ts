// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LivePackagingConfigDrmConfig extends $dara.Model {
  contentId?: string;
  encryptionMethod?: string;
  IV?: string;
  rotatePeriod?: number;
  systemIds?: string[];
  url?: string;
  static names(): { [key: string]: string } {
    return {
      contentId: 'ContentId',
      encryptionMethod: 'EncryptionMethod',
      IV: 'IV',
      rotatePeriod: 'RotatePeriod',
      systemIds: 'SystemIds',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentId: 'string',
      encryptionMethod: 'string',
      IV: 'string',
      rotatePeriod: 'number',
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

