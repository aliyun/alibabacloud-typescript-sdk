// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelDataFlowAutoRefreshRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can generate the value on your client and ensure that the value is unique across different requests.
   * 
   * The client token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the client token. The RequestId of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
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
   * Specifies whether to perform a dry run on this request.
   * 
   * A dry run checks parameter validity and resource availability. It does not actually perform the operation or incur fees.
   * 
   * Valid values:
   * 
   * - true: performs a dry run without performing the operation. The system checks whether required parameters are specified, whether the request format is valid, and whether business limits are met. If the request fails the dry run, an error is returned. If the request passes the dry run, HTTP status code 200 is returned, but DataFlowId is empty.
   * - false (default): sends a regular request. If the request passes the check, the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The directory for which you want to cancel the auto-update configuration.
   * 
   * Limits:
   * 
   * - The value must be 2 to 1,024 characters in length.
   * - The value must be encoded in UTF-8.
   * - The value must start and end with a forward slash (/).
   * 
   * > The directory must already exist in the CPFS file system and must be located in a Fileset for which the data flow feature is enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * /prefix1/prefix2/
   */
  refreshPath?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dataFlowId: 'DataFlowId',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
      refreshPath: 'RefreshPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dataFlowId: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
      refreshPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

