// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDataFlowSubTaskRequestCondition } from "./CreateDataFlowSubTaskRequestCondition";


export class CreateDataFlowSubTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests.
   * 
   * The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How do I ensure the idempotence?](https://help.aliyun.com/document_detail/25693.html)
   * 
   * >  If you do not specify this parameter, the system automatically uses the request ID as the client token. The request ID may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The check conditions. The check must be passed after the following conditions are specified.
   */
  condition?: CreateDataFlowSubTaskRequestCondition;
  /**
   * @remarks
   * The ID of the data flow.
   * 
   * This parameter is required.
   * 
   * @example
   * df-194433a5be31****
   */
  dataFlowId?: string;
  /**
   * @remarks
   * The ID of the data flow task.
   * 
   * >  Only the IDs of data streaming tasks are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * task-38aa8e890f45****
   */
  dataFlowTaskId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * During the dry run, the system checks whether the request parameters are valid and whether the requested resources are available. During the dry run, no data streaming subtask is created and no fee is incurred.
   * 
   * Valid values:
   * 
   * *   true: performs a dry run. The system checks the required parameters, request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the HTTP status code 200 is returned. No value is returned for the DataFlowSubTaskId parameter.
   * *   false (default): performs a dry run and sends the request. If the request passes the dry run, a data streaming subtask is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The path of the destination file. Limits:
   * 
   * *   The path must be 1 to 1,023 characters in length.
   * *   The path must be encoded in UTF-8.
   * *   The path must start with a forward slash (/).
   * *   The path must end with the file name.
   * 
   * This parameter is required.
   * 
   * @example
   * /mnt/file.png
   */
  dstFilePath?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * bmcpfs-370lx1ev9ss27o0****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The path of the source file. Limits:
   * 
   * *   The path must be 1 to 1,023 characters in length.
   * *   The path must be encoded in UTF-8.
   * *   The path must start with a forward slash (/).
   * *   The path must end with the file name.
   * 
   * This parameter is required.
   * 
   * @example
   * /test/file.png
   */
  srcFilePath?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      condition: 'Condition',
      dataFlowId: 'DataFlowId',
      dataFlowTaskId: 'DataFlowTaskId',
      dryRun: 'DryRun',
      dstFilePath: 'DstFilePath',
      fileSystemId: 'FileSystemId',
      srcFilePath: 'SrcFilePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      condition: CreateDataFlowSubTaskRequestCondition,
      dataFlowId: 'string',
      dataFlowTaskId: 'string',
      dryRun: 'boolean',
      dstFilePath: 'string',
      fileSystemId: 'string',
      srcFilePath: 'string',
    };
  }

  validate() {
    if(this.condition && typeof (this.condition as any).validate === 'function') {
      (this.condition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

