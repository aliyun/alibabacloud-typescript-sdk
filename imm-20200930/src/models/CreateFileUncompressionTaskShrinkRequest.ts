// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileUncompressionTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * **If you do not have special requirements, leave this parameter empty.**
   * 
   * The authorization chain settings. For more information, see [Use authorization chains to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfigShrink?: string;
  /**
   * @remarks
   * The notification settings. For information about the asynchronous notification format, see [Asynchronous message examples](https://help.aliyun.com/document_detail/2743997.html).
   * 
   * >  The IMM operation does not support a callback URL. We recommend that you use Simple Message Queue (SMQ) to receive notifications.
   */
  notificationShrink?: string;
  /**
   * @remarks
   * The password that protects the package.
   * 
   * @example
   * 123456
   */
  password?: string;
  /**
   * @remarks
   * The name of the project.[](~~478153~~)
   * 
   * This parameter is required.
   * 
   * @example
   * immtest
   */
  projectName?: string;
  /**
   * @remarks
   * The files to extract. If you do not specify this parameter, the entire package is decompressed.
   */
  selectedFilesShrink?: string;
  /**
   * @remarks
   * The OSS URI of the package.
   * 
   * Specify the OSS URI in the oss://${Bucket}/${Object} format, where `${Bucket}` is the name of the bucket in the same region as the current project and `${Object}` is the path of the object with the extension included.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://imm-apitest-fxf2/name.zip
   */
  sourceURI?: string;
  /**
   * @remarks
   * The OSS URI to which you want to extract files from the package or decompress the entire package.
   * 
   * Specify the OSS URI in the oss://${Bucket}/${Object} format, where `${Bucket}` is the name of the bucket in the same region as the current project and `${Object}` is the path of the object with the extension included.
   * 
   * @example
   * oss://test-bucket/test-dir/
   */
  targetURI?: string;
  /**
   * @remarks
   * The custom information, which is returned in an asynchronous notification and facilitates notification management. The maximum length of the value is 2,048 bytes.
   * 
   * @example
   * {"ID": "user1","Name": "test-user1","Avatar": "http://example.com?id=user1"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfigShrink: 'CredentialConfig',
      notificationShrink: 'Notification',
      password: 'Password',
      projectName: 'ProjectName',
      selectedFilesShrink: 'SelectedFiles',
      sourceURI: 'SourceURI',
      targetURI: 'TargetURI',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfigShrink: 'string',
      notificationShrink: 'string',
      password: 'string',
      projectName: 'string',
      selectedFilesShrink: 'string',
      sourceURI: 'string',
      targetURI: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

