// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLivePackageChannelResponseBodyLivePackageChannelIngestEndpoints extends $dara.Model {
  /**
   * @remarks
   * The ingest endpoint ID.
   * 
   * @example
   * ingest1
   */
  id?: string;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * 2F9e******b569c8
   */
  password?: string;
  /**
   * @remarks
   * The ingest endpoint URL.
   * 
   * @example
   * http://xxx-1.packagepush-abcxxx.ap-southeast-1.aliyuncsiceintl.com/v1/group01/1/ch01/manifest
   */
  url?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * us12******das
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

