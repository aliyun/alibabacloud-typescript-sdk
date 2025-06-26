// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceAttributeResponseBodyDataNodes extends $dara.Model {
  /**
   * @remarks
   * The node status.
   * 
   * @example
   * active
   */
  nodeStatus?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeStatus: 'NodeStatus',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeStatus: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

