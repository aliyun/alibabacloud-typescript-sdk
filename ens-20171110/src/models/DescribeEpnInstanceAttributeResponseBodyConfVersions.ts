// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEpnInstanceAttributeResponseBodyConfVersions extends $dara.Model {
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 2017-10-11
   */
  confVersion?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * cn-chengdu-telecom
   */
  ensRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      confVersion: 'ConfVersion',
      ensRegionId: 'EnsRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confVersion: 'string',
      ensRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

