// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAgenticSpaceQuotaRequest extends $dara.Model {
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
   * Specifies whether to perform a dry run for this request. A dry run checks parameter validity and dependencies without actually modifying the instance or incurring fees.
   * 
   * Valid values:
   * 
   * - true: Sends a check request without modifying the protocol service. The check items include whether required parameters are specified, request format, and business limit dependencies. If the check fails, the corresponding error is returned. If the check passes, HTTP status code 200 is returned.
   * - false (default): Sends a normal request. After the check passes, the protocol service is directly modified.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The file count limit for the quota. Valid values:
   * 
   * - Minimum value: 10,000.
   * 
   * - Maximum value: 100,000,000.
   * 
   * @example
   * 10000
   */
  fileCountLimit?: number;
  /**
   * @remarks
   * The file system ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The total capacity limit for the quota. Unit: bytes.
   * 
   * Valid values:
   * 
   * - Minimum value: 10,737,418,240 (10 GiB).
   * - Maximum value: 1,099,511,627,776,000 (1,024,000 GiB).
   * - Increment: 1,073,741,824 (1 GiB).
   * 
   * @example
   * 10737418240
   */
  sizeLimit?: number;
  static names(): { [key: string]: string } {
    return {
      agenticSpaceId: 'AgenticSpaceId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      fileCountLimit: 'FileCountLimit',
      fileSystemId: 'FileSystemId',
      sizeLimit: 'SizeLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agenticSpaceId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      fileCountLimit: 'number',
      fileSystemId: 'string',
      sizeLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

