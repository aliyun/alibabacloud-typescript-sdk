// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfig } from "./CredentialConfig";
import { Notification } from "./Notification";


export class CreateFileCompressionTaskRequestSources extends $dara.Model {
  /**
   * @remarks
   * Specifies a new path or name for the source file within the output compressed file.
   * 
   * - If you do not specify this parameter, the source directory structure is preserved. For example, if the source file is at `oss://test-bucket/test-dir/test-object.doc`, the path of the file in the compressed file is `/test-dir/test-object.doc`.
   * 
   * - Rename the file. For example, if the source file is at `oss://test-bucket/test-object.jpg` and you set this parameter to `/test-rename-object.jpg`, the file in the compressed file is named `test-rename-object.jpg`.
   * 
   * - Specify a new path for the source file in the compressed file. For example, if the source directory is `oss://test-bucket/test-dir/` and you set this parameter to `/new-dir/`, all files in the source directory are compressed into the `/new-dir/` path.
   * 
   * - Set the value to `/` to remove the source directory structure. All files are placed directly in the root directory of the compressed file, and the original directory structure is not preserved.
   * 
   * - Specify both a path and a file name. The file is renamed and moved to the specified path. For example, if you set this parameter to `/new-dir/alias.doc`, the file is renamed to `alias.doc` and placed in the `/new-dir/` path of the compressed file.
   * 
   * > * Avoid creating files with duplicate names during the renaming process. If duplicate names exist, you may not be able to decompress the file in the compressed package. This depends on the decompression program you use.
   * >
   * > * Format requirement: The value must start with a forward slash (\\`/\\`), such as `/new-dir/alias.doc`.
   * 
   * @example
   * /new-dir/
   */
  alias?: string;
  /**
   * @remarks
   * The pattern matching mode for the packaging rule. Valid values include `prefix` (prefix matching) and `fullname` (exact matching). The default value is `prefix`.
   * 
   * - `prefix`: In this mode, all files that match the prefix are packaged.
   * 
   * - `fullname`: In this mode, only the file that exactly matches the rule is packaged.
   * 
   * @example
   * fullname
   */
  mode?: string;
  /**
   * @remarks
   * The OSS address of the directory or file to package.
   * 
   * The OSS address must be in the \\`oss\\://${Bucket}/${Object}\\` format. \\`${Bucket}\\` is the name of the OSS bucket that is in the same region as the current project. \\`${Object}\\` is described as follows:
   * 
   * - To package a directory, \\`${Object}\\` is the directory name.
   * 
   * - To package a file, \\`${Object}\\` is the full path of the file, including the file name extension.
   * 
   * @example
   * oss://test-bucket/test-object
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      mode: 'Mode',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      mode: 'string',
      URI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileCompressionTaskRequest extends $dara.Model {
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
  credentialConfig?: CredentialConfig;
  /**
   * @remarks
   * The message notification configuration. For more information, see the Notification data type. For the format of asynchronous notification messages, see [Asynchronous notification message format](https://help.aliyun.com/document_detail/2743997.html).
   * 
   * > IMM API callbacks do not currently support specifying a webhook address. Use MNS instead.
   */
  notification?: Notification;
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
  sources?: CreateFileCompressionTaskRequestSources[];
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
      credentialConfig: 'CredentialConfig',
      notification: 'Notification',
      projectName: 'ProjectName',
      sourceManifestURI: 'SourceManifestURI',
      sources: 'Sources',
      targetURI: 'TargetURI',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compressedFormat: 'string',
      credentialConfig: CredentialConfig,
      notification: Notification,
      projectName: 'string',
      sourceManifestURI: 'string',
      sources: { 'type': 'array', 'itemType': CreateFileCompressionTaskRequestSources },
      targetURI: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.credentialConfig && typeof (this.credentialConfig as any).validate === 'function') {
      (this.credentialConfig as any).validate();
    }
    if(this.notification && typeof (this.notification as any).validate === 'function') {
      (this.notification as any).validate();
    }
    if(Array.isArray(this.sources)) {
      $dara.Model.validateArray(this.sources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

