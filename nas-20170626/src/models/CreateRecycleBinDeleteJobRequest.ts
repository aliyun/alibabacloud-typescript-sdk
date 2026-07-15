// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRecycleBinDeleteJobRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures the idempotence of the request.
   * 
   * Generate a parameter value from your client to ensure that the value is unique among different requests. The value of ClientToken can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * >If you do not specify ClientToken, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may vary for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The FileId of the file or directory that you want to permanently delete.
   * 
   * You can call the [ListRecycledDirectoriesAndFiles](https://help.aliyun.com/document_detail/2412174.html) operation to query the FileId of deleted data.
   * 
   * This parameter is required.
   * 
   * @example
   * 104
   */
  fileId?: string;
  /**
   * @remarks
   * The file system ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      fileId: 'FileId',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      fileId: 'string',
      fileSystemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

