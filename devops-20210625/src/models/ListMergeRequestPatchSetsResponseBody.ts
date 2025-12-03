// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMergeRequestPatchSetsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1a072f5367c21f9de3464b8c0ee8546e47764d2d
   */
  commitId?: string;
  /**
   * @example
   * 2022-03-18 14:24:54
   */
  createdAt?: string;
  /**
   * @example
   * 513fcfd81a9142d2bb0db4f72c0aa15b
   */
  patchSetBizId?: string;
  patchSetName?: string;
  /**
   * @example
   * 1
   */
  patchSetNo?: number;
  /**
   * @example
   * MERGE_SOURCE
   */
  relatedMergeItemType?: string;
  /**
   * @example
   * 1a072f53
   */
  shortCommitId?: string;
  static names(): { [key: string]: string } {
    return {
      commitId: 'commitId',
      createdAt: 'createdAt',
      patchSetBizId: 'patchSetBizId',
      patchSetName: 'patchSetName',
      patchSetNo: 'patchSetNo',
      relatedMergeItemType: 'relatedMergeItemType',
      shortCommitId: 'shortCommitId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitId: 'string',
      createdAt: 'string',
      patchSetBizId: 'string',
      patchSetName: 'string',
      patchSetNo: 'number',
      relatedMergeItemType: 'string',
      shortCommitId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMergeRequestPatchSetsResponseBody extends $dara.Model {
  /**
   * @example
   * SYSTEM_UNKNOWN_ERROR
   */
  errorCode?: string;
  /**
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @example
   * F7B85D1B-D1C2-140F-A039-341859F130B9
   */
  requestId?: string;
  result?: ListMergeRequestPatchSetsResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      requestId: 'requestId',
      result: 'result',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListMergeRequestPatchSetsResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

