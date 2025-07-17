// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDispatchRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the dispatch policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  id?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

