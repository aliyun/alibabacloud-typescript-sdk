// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApiKeyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * api-xxxxxx
   */
  keyId?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

