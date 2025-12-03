// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMergeRequestFilesReadsRequest extends $dara.Model {
  /**
   * @example
   * agp_4d57a6796b3626f52064ab1fba5384a5
   */
  accessToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5e733626d53f4b04a6aa0e23d4ff72b8
   */
  fromPatchSetBizId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5
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
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 513fcfd81a9142d2bb0db4f72c0aa15b
   */
  toPatchSetBizId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      fromPatchSetBizId: 'fromPatchSetBizId',
      localId: 'localId',
      organizationId: 'organizationId',
      repositoryIdentity: 'repositoryIdentity',
      toPatchSetBizId: 'toPatchSetBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      fromPatchSetBizId: 'string',
      localId: 'number',
      organizationId: 'string',
      repositoryIdentity: 'string',
      toPatchSetBizId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

