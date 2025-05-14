// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLivePackageChannelCredentialsResponseBodyIngestEndpoints extends $dara.Model {
  /**
   * @remarks
   * The ingest endpoint ID. `input1` indicates primary and `input2` indicates secondary.
   * 
   * @example
   * input1
   */
  id?: string;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * examplePassword123
   */
  password?: string;
  /**
   * @remarks
   * The ingest endpoint URL.
   * 
   * @example
   * rtmp://example.com/live/input1
   */
  url?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * user1
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      password: 'Password',
      url: 'Url',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      password: 'string',
      url: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

