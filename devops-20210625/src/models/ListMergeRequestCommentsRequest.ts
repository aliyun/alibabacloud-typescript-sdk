// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMergeRequestCommentsRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  /**
   * @example
   * GLOBAL_COMMENT
   */
  commentType?: string;
  /**
   * @example
   * /src/main/test.java
   */
  filePath?: string;
  patchSetBizIds?: string[];
  /**
   * @example
   * false
   */
  resolved?: boolean;
  /**
   * @example
   * OPENED
   */
  state?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  localId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60de7a6852743a5162b5f957
   */
  organizationId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  repositoryIdentity?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      commentType: 'commentType',
      filePath: 'filePath',
      patchSetBizIds: 'patchSetBizIds',
      resolved: 'resolved',
      state: 'state',
      localId: 'localId',
      organizationId: 'organizationId',
      repositoryIdentity: 'repositoryIdentity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      commentType: 'string',
      filePath: 'string',
      patchSetBizIds: { 'type': 'array', 'itemType': 'string' },
      resolved: 'boolean',
      state: 'string',
      localId: 'number',
      organizationId: 'string',
      repositoryIdentity: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.patchSetBizIds)) {
      $dara.Model.validateArray(this.patchSetBizIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

