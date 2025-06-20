// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendFileShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the file. The file must not exceed 32 KB in size after it is encoded in Base64.
   * 
   * *   If `ContentType` is set to `PlainText`, the value of Content is in plaintext.
   * *   If `ContentType` is set to `Base64`, the value of Content is Base64-encoded.
   * 
   * This parameter is required.
   * 
   * @example
   * #!/bin/bash echo "Current User is :" echo $(ps | grep "$$" | awk \\"{print $2}\\") -------- oss://bucketName/objectName
   */
  content?: string;
  /**
   * @remarks
   * The content type of the file. Valid values:
   * 
   * PlainText Base64 Default value: PlainText.
   * 
   * @example
   * PlainText
   */
  contentType?: string;
  /**
   * @remarks
   * The description of the file. The description can be up to 512 characters in length and can contain any characters.
   * 
   * @example
   * This is a test file.
   */
  description?: string;
  /**
   * @remarks
   * The user group of the file. This parameter takes effect only on Linux instances. Default value: root. The value can be up to 64 characters in length.
   * 
   * Note If you want to use a non-root user group, make sure that the user group exists in the instances.
   * 
   * @example
   * test
   */
  fileGroup?: string;
  /**
   * @remarks
   * The permissions on the file. This parameter takes effect only on Linux instances. You can configure this parameter in the same way as you configure the chmod command.
   * 
   * Default value: 0644: the owner of the file has the read and write permission. The user group of the file and other users have read-only permission.
   * 
   * @example
   * 0644
   */
  fileMode?: string;
  /**
   * @remarks
   * The owner of the file. This parameter takes effect only on Linux instances. Default value: root.
   * 
   * @example
   * root
   */
  fileOwner?: string;
  /**
   * @remarks
   * The file name. The name can be up to 255 characters in length and can contain any characters.
   * 
   * This parameter is required.
   * 
   * @example
   * file.txt
   */
  name?: string;
  /**
   * @remarks
   * The node list.
   * 
   * This parameter is required.
   */
  nodeIdListShrink?: string;
  /**
   * @remarks
   * Specifies whether to overwrite file with the same name in the destination directory.
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * True
   */
  overwrite?: boolean;
  /**
   * @remarks
   * The directory in the Lingjun node to which the file is sent. If the specified directory does not exist, the system creates the directory automatically.
   * 
   * This parameter is required.
   * 
   * @example
   * /home
   */
  targetDir?: string;
  /**
   * @remarks
   * The timeout period for the file sending task. Unit: seconds.
   * 
   * *   A timeout error occurs when a file cannot be sent because the process slows down or because a specific module or Cloud Assistant Agent does not exist.
   * *   If the specified timeout period is less than 10 seconds, the system sets the timeout period to 10 seconds to ensure that the file can be sent.
   * 
   * Default value: 60.
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

