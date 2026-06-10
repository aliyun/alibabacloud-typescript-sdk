// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSummaryInfoRequest extends $dara.Model {
  /**
   * @remarks
   * List of instance IDs.
   * 
   * @example
   * []
   */
  instanceIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceIdList: 'InstanceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIdList)) {
      $dara.Model.validateArray(this.instanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

