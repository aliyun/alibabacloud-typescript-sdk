// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachVscToMountPointsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The mount information list.
   */
  attachInfosShrink?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  inputRegionId?: string;
  /**
   * @remarks
   * Specifies whether to use an assumed role to check the permissions of the compute node. Valid values:
   * - true: Yes.
   * - false (default): No.
   * 
   * @example
   * false
   */
  useAssumeRoleChkServerPerm?: boolean;
  static names(): { [key: string]: string } {
    return {
      attachInfosShrink: 'AttachInfos',
      inputRegionId: 'InputRegionId',
      useAssumeRoleChkServerPerm: 'UseAssumeRoleChkServerPerm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachInfosShrink: 'string',
      inputRegionId: 'string',
      useAssumeRoleChkServerPerm: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

