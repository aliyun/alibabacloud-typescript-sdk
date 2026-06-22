// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileCompressionTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The compression format for file packaging.
   * 
   * > Currently, only the zip format is supported.
   * 
   * @example
   * zip
   */
  compressedFormat?: string;
  /**
   * @remarks
   * **If you do not have special requirements, leave this parameter empty.**
   * 
   * The chained authorization configuration. This parameter is not required. For more information, see [Use chained authorization to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfigShrink?: string;
  /**
   * @remarks
   * The message notification configuration. For more information, see the Notification data type. For the format of asynchronous notification messages, see [Asynchronous notification message format](https://help.aliyun.com/document_detail/2743997.html).
   * 
   * > IMM API callbacks do not currently support specifying a webhook address. Use MNS instead.
   */
  notificationShrink?: string;
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
   * The address where the file manifest is stored. The file manifest stores the \\`Sources\\` structure in JSON format on OSS. This is suitable for scenarios with many files to package.
   * 
   * > Specify either this parameter or `Sources`. In the manifest file, the `URI` parameter is required and the `Alias` parameter is optional. \\`SourceManifestURI\\` supports up to 80,000 packaging rules.
   * > >Warning: When you save the content to OSS, specify the OSS address of the file for this parameter.
   * 
   * The following is an example of the file structure:
   * 
   * ```
   * [{"URI":"oss://<bucket>/<object>", "Alias":"/new-dir/new-name"}]
   * ```
   * 
   * @example
   * oss://test-bucket/test-object.json
   */
  sourceManifestURI?: string;
  /**
   * @remarks
   * A list of files to package and their packaging rules.
   * 
   * > Specify either this parameter or \\`SourceManifestURI\\`. \\`Sources\\` supports a maximum of 100 packaging rules.
   * > >Warning: If you have more than 100 packaging rules, use the \\`SourceManifestURI\\` parameter.
   */
  sourcesShrink?: string;
  /**
   * @remarks
   * The OSS address of the output file. The compressed file is named after the file name in this path, such as `name.zip`.
   * 
   * The OSS address must be in the \\`oss\\://${Bucket}/${Object}\\` format. \\`${Bucket}\\` is the name of the OSS bucket that is in the same region as the current project. \\`${Object}\\` is the full path of the file, including the file name extension.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/test-target-object.zip
   */
  targetURI?: string;
  /**
   * @remarks
   * Custom user data. This data is returned in the asynchronous notification message, which helps you associate the notification with your internal system. The maximum length is 2,048 bytes.
   * 
   * @example
   * test-data
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      compressedFormat: 'CompressedFormat',
      credentialConfigShrink: 'CredentialConfig',
      notificationShrink: 'Notification',
      projectName: 'ProjectName',
      sourceManifestURI: 'SourceManifestURI',
      sourcesShrink: 'Sources',
      targetURI: 'TargetURI',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compressedFormat: 'string',
      credentialConfigShrink: 'string',
      notificationShrink: 'string',
      projectName: 'string',
      sourceManifestURI: 'string',
      sourcesShrink: 'string',
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

