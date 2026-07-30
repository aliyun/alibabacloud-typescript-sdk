// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTimerGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cg-hs3i1w39o68ma****
   */
  groupId?: string;
  /**
   * @remarks
   * The region ID. This feature is not region-specific. Set this parameter to `cn-shanghai`.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

