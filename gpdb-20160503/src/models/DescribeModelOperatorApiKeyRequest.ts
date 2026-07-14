// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelOperatorApiKeyRequest extends $dara.Model {
  /**
   * @remarks
   * API KEY ID。
   * 
   * @example
   * 1
   */
  apiKeyId?: number;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'ApiKeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

