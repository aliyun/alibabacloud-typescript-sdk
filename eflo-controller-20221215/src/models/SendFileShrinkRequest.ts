// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendFileShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the file. After Base64 encoding, the size cannot exceed 32 KB.
   * 
   * - When the `ContentType` parameter is `PlainText`, this field is plain text.
   * - When the `ContentType` parameter is `Base64`, this field is Base64 encoded text.
   * 
   * This parameter is required.
   * 
   * @example
   * #!/bin/bash echo "Current User is :" echo $(ps | grep "$$" | awk \\"{print $2}\\") -------- oss://bucketName/objectName
   */
  content?: string;
  /**
   * @remarks
   * The content type of the file.
   * 
   * PlainText: Plain text.
   * Base64: Base64 encoded.
   * The default value is PlainText.
   * 
   * @example
   * PlainText
   */
  contentType?: string;
  /**
   * @remarks
   * Description information. Supports all character sets, and the length must not exceed 512 characters.
   * 
   * @example
   * This is a test file.
   */
  description?: string;
  /**
   * @remarks
   * The group of the file. Applies only to Linux instances, and the default is root. The length must not exceed 64 characters.
   * 
   * Note
   * When using other groups, ensure that the group exists in the instance.
   * 
   * @example
   * test
   */
  fileGroup?: string;
  /**
   * @remarks
   * The permissions of the file. Applies only to Linux instances, and the setting method is the same as the chmod command.
   * 
   * The default value is 0644, which means the user has read and write permissions, while the group and other users have read-only permissions.
   * 
   * @example
   * 0644
   */
  fileMode?: string;
  /**
   * @remarks
   * The owner of the file. Applies only to Linux instances, and the default is root.
   * 
   * @example
   * root
   */
  fileOwner?: string;
  /**
   * @remarks
   * The name of the file. Supports all character sets, and the length must not exceed 255 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * file.txt
   */
  name?: string;
  /**
   * @remarks
   * List of nodes.
   * 
   * This parameter is required.
   */
  nodeIdListShrink?: string;
  /**
   * @remarks
   * Whether to overwrite the file if a file with the same name already exists in the target directory.
   * - true: Overwrite.
   * - false: Do not overwrite.
   * 
   * The default value is false.
   * 
   * @example
   * True
   */
  overwrite?: boolean;
  /**
   * @remarks
   * The directory in the target Lingjun node where the file will be sent. If it does not exist, it will be automatically created.
   * 
   * This parameter is required.
   * 
   * @example
   * /home
   */
  targetDir?: string;
  /**
   * @remarks
   * The timeout for sending the file. Unit: seconds.
   * 
   * - A timeout may occur due to process reasons, missing modules, or missing Cloud Assistant Agent.
   * - If the set timeout is less than 10 seconds, to ensure successful delivery, the system will automatically set the timeout to 10 seconds.
   * 
   * The default value is 60.
   * 
   * @example
   * 600
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      description: 'Description',
      fileGroup: 'FileGroup',
      fileMode: 'FileMode',
      fileOwner: 'FileOwner',
      name: 'Name',
      nodeIdListShrink: 'NodeIdList',
      overwrite: 'Overwrite',
      targetDir: 'TargetDir',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      description: 'string',
      fileGroup: 'string',
      fileMode: 'string',
      fileOwner: 'string',
      name: 'string',
      nodeIdListShrink: 'string',
      overwrite: 'boolean',
      targetDir: 'string',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

