// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRecycleBinRestoreJobRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Generate a value from your client to ensure that the value is unique among different requests. The ClientToken value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * >If you do not specify ClientToken, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may vary for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The FileId of the file or directory to restore.
   * 
   * You can call the [ListRecycledDirectoriesAndFiles](https://help.aliyun.com/document_detail/2412174.html) operation to query the FileId of deleted data.
   * 
   * This parameter is required.
   * 
   * @example
   * 04***08
   */
  fileId?: string;
  /**
   * @remarks
   * The file system ID. **Required**.
   * 
   * **How to obtain**:
   * - Call [DescribeFileSystems](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-describefilesystems) to query the file system list and obtain the FileSystemId.
   * - Call [CreateFileSystem](https://www.alibabacloud.com/help/en/nas/developer-reference/api-nas-2017-06-26-createfilesystem) to create a file system and obtain the FileSystemId from the response.
   * 
   * **Usage notes**:
   * - This operation applies only to General-purpose NAS file systems.
   * - Before calling this operation, make sure that the recycle bin feature is enabled for the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The FileId of the directory to which the file is restored.
   * 
   * - You can call the [ListRecentlyRecycledDirectories](https://help.aliyun.com/document_detail/2412173.html) operation to query the TargetFileId of directories from which files have been deleted.
   * 
   * - You can call the [ListDirectoriesAndFiles](https://help.aliyun.com/document_detail/2412163.html) operation to query the TargetFileId of existing directories in the file system.
   * 
   * **Special notes**:
   * - The FileId of the root directory of a file system is fixed to `2`. You can directly use this value as the TargetFileId to restore a file to the root directory without querying.
   * 
   * This parameter is required.
   * 
   * @example
   * 13***15
   */
  targetFileId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      fileId: 'FileId',
      fileSystemId: 'FileSystemId',
      targetFileId: 'TargetFileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      fileId: 'string',
      fileSystemId: 'string',
      targetFileId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

