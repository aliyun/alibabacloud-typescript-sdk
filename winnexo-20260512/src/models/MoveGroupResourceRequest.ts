// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveGroupResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The collaboration space ID.
   * 
   * This parameter is required.
   * 
   * @example
   * group_example
   */
  groupId?: string;
  /**
   * @remarks
   * The real ID of the physical directory in the space where the resource currently resides. The root sentinel is not supported.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  sourceDirectoryId?: string;
  /**
   * @remarks
   * The physical GROUP resource ID to be moved. Referenced resources are read-only.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  sourceId?: string;
  /**
   * @remarks
   * The real ID of the target physical directory in the same space. This value must be different from the source directory ID.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  targetDirectoryId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If this parameter is not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      sourceDirectoryId: 'sourceDirectoryId',
      sourceId: 'sourceId',
      targetDirectoryId: 'targetDirectoryId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
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

