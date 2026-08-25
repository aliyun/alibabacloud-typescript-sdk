// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCredentialsRequest extends $dara.Model {
  /**
   * @example
   * apiKey
   */
  credentialType?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * model
   */
  nameLike?: string;
  /**
   * @example
   * 10
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      credentialType: 'credentialType',
      maxResults: 'maxResults',
      nameLike: 'nameLike',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialType: 'string',
      maxResults: 'number',
      nameLike: 'string',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

