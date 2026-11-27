// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyProtocolServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, and you must make sure that the value is unique among different requests.
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
   * The description of the protocol service.
   * 
   * Limits:
   * 
   * - The description must be 2 to 128 characters in length.
   * - The description must start with a letter or a Chinese character, and cannot start with `http://` or `https://`.
   * - The description can contain digits, colons (:), underscores (_), and hyphens (-).
   * - **Spaces and other special characters are not allowed**. Valid example: `My-Protocol-Service_01`.
   * 
   * @example
   * My-Protocol-Service_01
   * 
   * **if can be null:**
   * false
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the modification request.
   * A dry run checks the validity of parameters and dependencies without actually modifying the instance or incurring fees.
   * 
   * Valid values:
   * - true: Performs a dry run. The protocol service is not modified. The system checks whether required parameters are specified, the request format is valid, and business limits and dependencies are met. If the request fails the dry run, an error is returned. If the request passes the dry run, the HTTP status code 200 is returned.
   * - false (default): Performs a normal request. The protocol service is modified after the request passes the check.
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
   * The ID of the protocol service. You can obtain the ID by calling the [CreateProtocolService](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createprotocolservice-cpfs) operation after you create a protocol service, or by calling the [DescribeProtocolService](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describeprotocolservice-cpfs) operation to query existing protocol services.
   * 
   * This parameter is required.
   * 
   * @example
   * ptc-197ed6a00f2b****
   */
  protocolServiceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      fileSystemId: 'FileSystemId',
      protocolServiceId: 'ProtocolServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      fileSystemId: 'string',
      protocolServiceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

