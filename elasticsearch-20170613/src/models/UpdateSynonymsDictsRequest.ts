// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSynonymsDictsRequest extends $dara.Model {
  /**
   * @remarks
   * The file name, source, and OSS file information of the synonym dictionary.
   * 
   * @example
   * [{"name":"SYSTEM_STOPWORD.txt","sourceType":"ORIGIN","type":"SYNONYMS"}]
   */
  body?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique across different requests. The token can be up to 64 ASCII characters in length.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

