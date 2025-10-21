// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePolicyRequest extends $dara.Model {
  /**
   * @remarks
   * List of detection policy IDs
   */
  policyIdList?: number[];
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
      policyIdList: 'PolicyIdList',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyIdList: { 'type': 'array', 'itemType': 'number' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIdList)) {
      $dara.Model.validateArray(this.policyIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

