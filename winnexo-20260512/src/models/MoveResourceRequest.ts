// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The source directory ID, which is the personal directory where the resource currently resides.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleSourceDirectoryId
   */
  sourceDirectoryId?: string;
  /**
   * @remarks
   * The ID of the resource to be moved.
   * 
   * This parameter is required.
   * 
   * @example
   * 8
   */
  sourceId?: string;
  /**
   * @remarks
   * The target directory ID, which is the personal directory to which the resource will be moved.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleTargetDirectoryId
   */
  targetDirectoryId?: string;
  /**
   * @remarks
   * The tenant ID. You can view the tenant ID by logging on to the MaxCompute console and choosing **Tenant Management** > **Tenant Properties** in the left-side navigation pane.
   * 
   * @example
   * PiPklI1iSRTm6VFFqlY9VzbgiEiE
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceDirectoryId: 'sourceDirectoryId',
      sourceId: 'sourceId',
      targetDirectoryId: 'targetDirectoryId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceDirectoryId: 'string',
      sourceId: 'string',
      targetDirectoryId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

