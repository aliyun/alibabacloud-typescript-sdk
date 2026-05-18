// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachVscFromMountPointsShrinkRequest extends $dara.Model {
  detachInfosShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  inputRegionId?: string;
  useAssumeRoleChkServerPerm?: boolean;
  static names(): { [key: string]: string } {
    return {
      detachInfosShrink: 'DetachInfos',
      inputRegionId: 'InputRegionId',
      useAssumeRoleChkServerPerm: 'UseAssumeRoleChkServerPerm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detachInfosShrink: 'string',
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

