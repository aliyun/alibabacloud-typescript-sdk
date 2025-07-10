// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSupabaseProjectApiKeysResponseBodyApiKeys extends $dara.Model {
  /**
   * @example
   * Tmz2Z59caMDeq/Xi9vuc****
   */
  apiKey?: string;
  /**
   * @example
   * anon key
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

