// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceAttributeResponseBodyDedicatedHostAttribute extends $dara.Model {
  /**
   * @remarks
   * The ID of the dedicated host.
   * 
   * @example
   * None
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * The name of the dedicated host.
   * 
   * @example
   * None
   */
  dedicatedHostName?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
      dedicatedHostName: 'DedicatedHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: 'string',
      dedicatedHostName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

