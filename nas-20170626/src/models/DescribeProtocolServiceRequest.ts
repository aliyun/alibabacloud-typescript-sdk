// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProtocolServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * >If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId of each API request may be different.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  clientToken?: string;
  /**
   * @remarks
   * Filters protocol services by description or a part of the description.
   * 
   * Limits:
   * - The description must be 2 to 128 characters in length.
   * - The description must start with a letter and cannot start with `http://` or `https://`.
   * - The description can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * The description of this protocol service
   */
  description?: string;
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
   * The maximum number of entries to return for a single request.
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
   * The pagination token. If the response is truncated, you can use this token to initiate another request to retrieve the remaining results.
   * 
   * @example
   * aBcdg==
   */
  nextToken?: string;
  /**
   * @remarks
   * The IDs of the protocol services.
   * - Format: CSV
   * 
   * - Limit: Up to 10 protocol service IDs can be specified.
   * 
   * @example
   * ptc-197ed6a00f2b****,ptc-196ed6a00f2b****
   */
  protocolServiceIds?: string;
  /**
   * @remarks
   * Filters protocol services by status.
   * 
   * Format: CSV
   * 
   * Valid values:
   * - Creating: The protocol service is being created.
   * - Starting: The protocol service is starting.
   * - Running: The protocol service is available.
   * - Updating: The protocol service is being updated.
   * - Deleting: The protocol service is being deleted.
   * - Stopping: The protocol service is stopping.
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

