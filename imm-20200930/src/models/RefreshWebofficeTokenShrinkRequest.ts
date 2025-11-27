// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshWebofficeTokenShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Weboffice access token. Obtain it through the [GenerateWebofficeToken](https://help.aliyun.com/document_detail/478226.html) or [RefreshWebofficeToken](https://help.aliyun.com/document_detail/478227.html) interfaces.
   * 
   * This parameter is required.
   * 
   * @example
   * 99d1b8b478b641c1b3372f5bd6********
   */
  accessToken?: string;
  /**
   * @remarks
   * **If there are no special requirements, leave it blank.**
   * 
   * Chained authorization configuration, optional. For more information, see [Access Other Entity Resources Using Chained Authorization](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfigShrink?: string;
  /**
   * @remarks
   * Project name. For more information on how to obtain it, see [Create Project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * Weboffice refresh token. Obtain it through the [GenerateWebofficeToken](https://help.aliyun.com/document_detail/478226.html) or [RefreshWebofficeToken](https://help.aliyun.com/document_detail/478227.html) interfaces.
   * 
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

