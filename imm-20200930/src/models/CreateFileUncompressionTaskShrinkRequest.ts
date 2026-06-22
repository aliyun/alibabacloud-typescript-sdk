// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileUncompressionTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * **Leave this parameter empty unless you have specific requirements.**
   * 
   * The chained authorization configuration. This parameter is optional. For more information, see [Use chained authorization to access other entity resources](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfigShrink?: string;
  /**
   * @remarks
   * The message notification configuration. For details, click Notification. For the format of asynchronous notification messages, see [Asynchronous notification message format](https://help.aliyun.com/document_detail/2743997.html).
   * 
   * > Intelligent Media Management API callbacks do not support custom webhook addresses. Use MNS instead.
   */
  notificationShrink?: string;
  /**
   * @remarks
   * The password for the encrypted compressed package.
   * 
   * @example
   * 123456
   */
  password?: string;
  /**
   * @remarks
   * The name of the project. For more information, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The list of files to decompress. If this parameter is empty, the entire compressed package is decompressed. The default value is empty.
   */
  selectedFilesShrink?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) address where the compressed file is stored.
   * 
   * The OSS address must be in the \\`oss\\://${Bucket}/${Object}\\` format. \\`${Bucket}\\` is the name of the OSS bucket in the same region as the current project. \\`${Object}\\` is the full path of the file, including the file name extension.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/test-object.zip
   */
  sourceURI?: string;
  /**
   * @remarks
   * The destination OSS address for the decompressed files. The selected files or the entire compressed package are decompressed to this address.
   * 
   * The OSS address must be in the \\`oss\\://${Bucket}/${Object}\\` format. \\`${Bucket}\\` is the name of the OSS bucket in the same region as the current project. \\`${Object}\\` is the full path of the file, including the file name extension.
   * 
   * @example
   * oss://test-bucket/test-dir/
   */
  targetURI?: string;
  /**
   * @remarks
   * Custom user information. It is returned in the asynchronous notification message to help you associate the notification with your system. The maximum length is 2,048 bytes.
   * 
   * @example
   * test-data
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

