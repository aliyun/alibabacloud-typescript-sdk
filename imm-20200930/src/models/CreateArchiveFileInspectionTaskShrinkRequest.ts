// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateArchiveFileInspectionTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * **Leave this parameter empty if you do not have special requirements.**
   * 
   * The configuration for chained authorization. This parameter is not required. For more information, see [Use chained authorization to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfigShrink?: string;
  /**
   * @remarks
   * The notification configuration. For more information, see Notification. For the format of asynchronous notification messages, see [Asynchronous notification message format](https://help.aliyun.com/document_detail/2743997.html).
   * 
   * > Currently, API callbacks in IMM do not support custom webhook addresses. Use MNS instead.
   */
  notificationShrink?: string;
  /**
   * @remarks
   * The password of the compressed file. If the file is encrypted, provide the password to inspect its contents.
   * 
   * @example
   * 123456
   */
  password?: string;
  /**
   * @remarks
   * The project name. For more information, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The location of the compressed file.
   * 
   * The Object Storage Service (OSS) URI must be in the oss\\://${Bucket}/${Object} format. In this format, `${Bucket}` is the name of the OSS bucket that is in the same region as the current project, and `${Object}` is the full path of the file, including the file name extension.
   * 
   * @example
   * oss://bucket/test-object.zip
   */
  sourceURI?: string;
  /**
   * @remarks
   * Custom information that is returned in the asynchronous notification message. You can use this information to associate the notification message with your services. The maximum length is 2,048 bytes.
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
      sourceURI: 'SourceURI',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfigShrink: 'string',
      notificationShrink: 'string',
      password: 'string',
      projectName: 'string',
      sourceURI: 'string',
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

