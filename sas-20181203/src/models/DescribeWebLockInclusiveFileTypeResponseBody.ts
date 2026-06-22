// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebLockInclusiveFileTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of file types supported by tamper-proofing protection.
   */
  inclusiveFileType?: string[];
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * CE500770-42D3-442E-9DDD-156E0F9F3B45
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of file types supported by tamper-proofing protection.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      inclusiveFileType: 'InclusiveFileType',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inclusiveFileType: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.inclusiveFileType)) {
      $dara.Model.validateArray(this.inclusiveFileType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

