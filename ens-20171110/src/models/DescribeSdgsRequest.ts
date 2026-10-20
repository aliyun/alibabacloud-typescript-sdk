// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSDGsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of AIC instance IDs to query.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The list of SDG IDs to query.
   */
  SDGIds?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      SDGIds: 'SDGIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      SDGIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.SDGIds)) {
      $dara.Model.validateArray(this.SDGIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

