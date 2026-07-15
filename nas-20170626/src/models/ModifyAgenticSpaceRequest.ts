// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAgenticSpaceRequest extends $dara.Model {
  /**
   * @remarks
   * AgenticSpace Id。
   * 
   * This parameter is required.
   * 
   * @example
   * agentic-229oypxjgpau2****
   */
  agenticSpaceId?: string;
  /**
   * @remarks
   * Ensures the idempotence of the request. Generate a unique parameter value from your client to ensure that the value is unique across different requests.
   * 
   * ClientToken supports only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may differ for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the AgenticSpace.
   * 
   * @example
   * Agentic Space Description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for this request.
   * 
   * A dry run checks parameter validity and resource availability without actually modifying the instance or incurring charges.
   * 
   * Valid values:
   * 
   * - true: Sends a check request without modifying the instance. The check items include whether required parameters are specified, request format, business limits, and NAS resource availability. If the check fails, the corresponding error is returned. If the check passes, HTTP status code 200 is returned, but FileSystemId is empty.
   * - false (default): Sends a normal request and directly modifies the instance after the check passes.
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
   * 31a8e4****
   */
  fileSystemId?: string;
  static names(): { [key: string]: string } {
    return {
      agenticSpaceId: 'AgenticSpaceId',
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agenticSpaceId: 'string',
      clientToken: 'string',
      description: 'string',
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

