// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetApiKeyRequest extends $dara.Model {
  apiKeyId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'apiKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

