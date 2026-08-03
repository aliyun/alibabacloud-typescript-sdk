// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataFlowSubTaskRequestCondition extends $dara.Model {
  /**
   * @remarks
   * The modification time as a UNIX timestamp. Unit: ns.
   * 
   * @example
   * 1725897600000000000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The file size. Unit: bytes.
   * 
   * @example
   * 68
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      modifyTime: 'ModifyTime',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyTime: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataFlowSubTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures the idempotency of the request. Generate a unique parameter value from your client to ensure that the value is unique across different requests.
   * 
   * ClientToken supports only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotency](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may differ for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The verification condition. The specified conditions must pass verification.
   */
  condition?: CreateDataFlowSubTaskRequestCondition;
  /**
   * @remarks
   * The data flow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * df-194433a5be31****
   */
  dataFlowId?: string;
  /**
   * @remarks
   * The data flow task ID.
   * >Only data flow streaming task IDs are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * task-38aa8e890f45****
   */
  dataFlowTaskId?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for this request.
   * 
   * A dry run checks parameter validity and resource availability without actually creating the instance or incurring charges.
   * 
   * Valid values:
   * 
   * - true: Sends a check request without creating the data flow. The check items include whether required parameters are specified, the request format, and business limit dependencies. If the check fails, the corresponding error is returned. If the check passes, HTTP status code 200 is returned, but DataFlowSubTaskId is empty.
   * - false (default): Sends a normal request and directly creates the instance after the check passes.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The destination file path.
   * Limits:
   * - The value must be 1 to 1,023 characters in length.
   * - The value must be encoded in UTF-8.
   * - The value must start with a forward slash (/).
   * - The value must end with a file name.
   * 
   * This parameter is required.
   * 
   * @example
   * /mnt/file.png
   */
  dstFilePath?: string;
  /**
   * @remarks
   * The file system ID.
   * 
   * This parameter is required.
   * 
   * @example
   * bmcpfs-370lx1ev9ss27o0****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The source file path.
   * Limits:
   * - The value must be 1 to 1,023 characters in length.
   * - The value must be encoded in UTF-8.
   * - The value must start with a forward slash (/).
   * - The value must end with a file name.
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

