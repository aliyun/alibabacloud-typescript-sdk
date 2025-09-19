// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebLockExclusiveFileTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the types of the files that are excluded from web tamper proofing.
   */
  exclusiveFileType?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9CCD7D51-5E81-5FF5-BD74-813DDD248430
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of types of the files that are excluded from web tamper proofing.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      exclusiveFileType: 'ExclusiveFileType',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exclusiveFileType: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.exclusiveFileType)) {
      $dara.Model.validateArray(this.exclusiveFileType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

