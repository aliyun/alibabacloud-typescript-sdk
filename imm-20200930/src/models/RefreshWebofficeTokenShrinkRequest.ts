// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshWebofficeTokenShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 99d1b8b478b641c1b3372f5bd6********
   */
  accessToken?: string;
  /**
   * @remarks
   * **If you have no special requirements, leave this parameter empty.**
   * 
   * The authorization chain settings. For more information, see [Use authorization chains to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfigShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a730ae0d7c6a487d87c661d199********
   */
  refreshToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      credentialConfigShrink: 'CredentialConfig',
      projectName: 'ProjectName',
      refreshToken: 'RefreshToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      credentialConfigShrink: 'string',
      projectName: 'string',
      refreshToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

