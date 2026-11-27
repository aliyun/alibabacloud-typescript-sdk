// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can generate the value from your client and ensure that the value is unique across different requests.
   * 
   * The ClientToken parameter supports only ASCII characters and can be up to 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
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
   * A dry run checks parameter validity and inventory availability without actually creating the instance or incurring charges.
   * 
   * Valid values:
   * 
   * - true: Sends a dry run request. The instance is not created. Check items include whether required parameters are specified, request format, service limits, and NAS inventory. If the check fails, the corresponding error is returned. If the check succeeds, HTTP status code 200 is returned, but FileSystemId is empty.
   * - false (default): Sends a normal request. The instance is created directly after the check succeeds.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The file system ID.
   * 
   * - CPFS: The ID must start with `cpfs-`, such as cpfs-125487\*\*\*\*.
   * 
   * - CPFS for Lingjun: The ID must start with `bmcpfs-`, such as bmcpfs-0015\*\*\*\*.
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

