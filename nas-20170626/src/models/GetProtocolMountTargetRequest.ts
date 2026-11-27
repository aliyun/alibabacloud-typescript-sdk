// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProtocolMountTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can generate the value on your client to ensure that the value is unique across different requests.
   * 
   * The ClientToken parameter supports only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the protocol service export directory. **Required**.
   * 
   * **How to obtain**:
   * - Call the [CreateProtocolMountTarget](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-createprotocolmounttarget-cpfs) operation to create an export directory and obtain the ExportId from the response.
   * - Alternatively, call the [DescribeProtocolMountTarget](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describeprotocolmounttarget-cpfs) operation to query the export directory list and obtain the ExportId from the response.
   * 
   * This parameter is required.
   * 
   * @example
   * exp-19abf5beab8d****
   */
  exportId?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * - CPFS: The ID must start with `cpfs-`, such as cpfs-125487\*\*\*\*.
   * 
   * - CPFS for Lingjun: The ID must start with `bmcpfs-`, such as bmcpfs-0015\*\*\*\*.
   * - CPFS SE: The ID must start with `cpfsse-`, such as cpfsse-022c71b134\*\*\*\*.
   * 
   * This parameter is required.
   * 
   * @example
   * cpfs-099394bd928c****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The maximum number of entries to return for a single request.
   * 
   * Valid values: 10 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The next token. If the response is truncated, you can use NextToken to send another request to retrieve the remaining results.
   * 
   * @example
   * M18xMA==
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the protocol service. **Required**.
   * 
   * **How to obtain**: Call the [DescribeProtocolService](https://www.alibabacloud.com/help/en/cpfs/cpfsonecs/developer-reference/api-nas-2017-06-26-describeprotocolservice-cpfs) operation to query the protocol service list and obtain the ProtocolServiceId from the response.
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
      exportId: 'ExportId',
      fileSystemId: 'FileSystemId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      protocolServiceId: 'ProtocolServiceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      exportId: 'string',
      fileSystemId: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

