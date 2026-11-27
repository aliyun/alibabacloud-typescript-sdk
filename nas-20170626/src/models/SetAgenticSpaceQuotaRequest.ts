// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAgenticSpaceQuotaRequest extends $dara.Model {
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
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, and you must ensure that the value is unique among different requests.
   * 
   * The client token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the client token. The RequestId of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the modification request. A dry run checks the validity of parameters and dependencies without actually modifying the instance or incurring fees.
   * 
   * Valid values:
   * 
   * - true: performs a dry run. The protocol service is not modified. The system checks whether required parameters are specified, the request format is valid, and business limits and dependencies are met. If the request fails the dry run, an error is returned. If the request passes the dry run, the HTTP status code 200 is returned.
   * - false: performs a normal request. The protocol service is modified directly after the request passes the check. This is the default value.
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
   * The ID of the file system.
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
   * - Step size: 1,073,741,824 (1 GiB).
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

