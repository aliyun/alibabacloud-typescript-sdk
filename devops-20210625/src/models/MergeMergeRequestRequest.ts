// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MergeMergeRequestRequest extends $dara.Model {
  /**
   * @example
   * 0cf2c8458ac44d9481aab2dd6ec10596v3
   */
  accessToken?: string;
  /**
   * @example
   * ""
   */
  mergeMessage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * no-fast-forward
   */
  mergeType?: string;
  /**
   * @example
   * true
   */
  removeSourceBranch?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60de7a6852743a5162b5f957
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      mergeMessage: 'mergeMessage',
      mergeType: 'mergeType',
      removeSourceBranch: 'removeSourceBranch',
      organizationId: 'organizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      mergeMessage: 'string',
      mergeType: 'string',
      removeSourceBranch: 'boolean',
      organizationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

