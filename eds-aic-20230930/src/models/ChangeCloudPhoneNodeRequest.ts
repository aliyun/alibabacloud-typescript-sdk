// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeCloudPhoneNodeRequest extends $dara.Model {
  /**
   * @example
   * ac.max
   */
  instanceType?: string;
  /**
   * @example
   * cpn-0ugbptfu473fy****
   */
  nodeId?: string;
  /**
   * @example
   * 20
   */
  phoneCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      nodeId: 'NodeId',
      phoneCount: 'PhoneCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      nodeId: 'string',
      phoneCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

