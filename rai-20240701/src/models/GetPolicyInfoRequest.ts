// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolicyInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Detection policy ID
   * 
   * @example
   * 16
   */
  policyId?: number;
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
      policyId: 'PolicyId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
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

