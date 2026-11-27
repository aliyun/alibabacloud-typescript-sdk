// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartDataFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can generate a parameter value from your client to ensure that this parameter value is unique across different requests.
   * 
   * The ClientToken parameter supports only ASCII characters and cannot exceed 64 characters. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
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
   * Specifies whether to perform a dry run on this creation request.
   * 
   * The dry run checks the validity of parameters and the resource inventory. It does not actually create an instance or incur fees.
   * 
   * Valid values:
   * 
   * - true: Sends a check request and does not create an instance. The check items include whether the required parameters are specified, the request format, service limits, and NAS resource inventory. If the check fails, the corresponding error is returned. If the check succeeds, HTTP status code 200 is returned, but the FileSystemId is empty.
   * - false (default): Sends a normal request. After the check succeeds, the instance is directly created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The file system ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dataFlowId: 'DataFlowId',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dataFlowId: 'string',
      dryRun: 'boolean',
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

