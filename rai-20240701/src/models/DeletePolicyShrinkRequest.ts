// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * List of detection policy IDs
   */
  policyIdListShrink?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      policyIdListShrink: 'PolicyIdList',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIdListShrink: 'string',
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

