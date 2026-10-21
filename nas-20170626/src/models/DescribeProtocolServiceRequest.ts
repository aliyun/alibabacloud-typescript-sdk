// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProtocolServiceRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures the idempotency of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotency](https://help.aliyun.com/document_detail/25693.html).
   * >If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may vary for each API request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the protocol service or a part of the description used for matching.
   * 
   * Limits:
   * - The description must be 2 to 128 characters in length.
   * - The description must start with a letter and cannot start with `http://` or `https://`.
   * - The description can contain digits, colons (:), underscores (_), or hyphens (-).
   * 
   * @example
   * Description of this protocol service
   */
  description?: string;
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
  /**
   * @remarks
   * The maximum number of results to return for each request.
   * 
   * - Maximum value: 100.
   * - Minimum value: 10.
   * - Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to initiate the next request if the response of the current request is truncated. You can use this token to retrieve the remaining results.
   * 
   * @example
   * aBcdg==
   */
  nextToken?: string;
  /**
   * @remarks
   * The protocol service IDs.
   * - Format: CSV
   * 
   * - Limit: You can specify up to 10 protocol service IDs.
   * 
   * @example
   * ptc-197ed6a00f2b****,ptc-196ed6a00f2b****
   */
  protocolServiceIds?: string;
  /**
   * @remarks
   * The status of the protocol service used for matching.
   * 
   * Format: CSV
   * 
   * Valid values:
   * - Creating: The protocol service is being created.
   * - Starting: The protocol service is being started.
   * - Running: The protocol service is available.
   * - Updating: The protocol service is being updated.
   * - Deleting: The protocol service is being deleted.
   * - Stopping: The protocol service is being stopped.
   * - Stopped: The protocol service is stopped.
   * 
   * @example
   * Running,Updating
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      fileSystemId: 'FileSystemId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      protocolServiceIds: 'ProtocolServiceIds',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      fileSystemId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      protocolServiceIds: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

