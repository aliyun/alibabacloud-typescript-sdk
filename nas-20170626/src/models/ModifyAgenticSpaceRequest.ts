// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAgenticSpaceRequest extends $dara.Model {
  /**
   * @remarks
   * The AgenticSpace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * agentic-229oypxjgpau2****
   */
  agenticSpaceId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests.
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
   * The description of the Agentic space.
   * 
   * @example
   * Agentic Space Description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on this request.
   * 
   * A dry run checks parameter validity and verifies inventory, but does not actually create an instance or incur any fees.
   * 
   * Valid values:
   * 
   * - true: A dry run is performed and no instance is created. The system checks whether required parameters are specified, the request format, business limits, and NAS inventory. If the request fails the check, an error is returned. If the request passes the check, the HTTP status code 200 is returned, but the FileSystemId is empty.
   * - false (default): A normal request is sent. If the request passes the check, the instance is directly modified.
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

