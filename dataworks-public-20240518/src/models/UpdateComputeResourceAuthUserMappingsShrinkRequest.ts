// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateComputeResourceAuthUserMappingsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The compute resource ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123455
   */
  computeResourceId?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The list of user mappings to remove.
   */
  removeUserIdsShrink?: string;
  /**
   * @remarks
   * The list of objects to update.
   */
  upsertsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      computeResourceId: 'ComputeResourceId',
      projectId: 'ProjectId',
      removeUserIdsShrink: 'RemoveUserIds',
      upsertsShrink: 'Upserts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResourceId: 'number',
      projectId: 'number',
      removeUserIdsShrink: 'string',
      upsertsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

