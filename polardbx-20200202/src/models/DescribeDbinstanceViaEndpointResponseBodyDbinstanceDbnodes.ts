// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceViaEndpointResponseBodyDBInstanceDBNodes extends $dara.Model {
  /**
   * @example
   * pxc-i-********
   */
  computeNodeId?: string;
  /**
   * @example
   * pxc-xdb-xxxxxx
   */
  dataNodeId?: string;
  /**
   * @example
   * pxi-*********
   */
  id?: string;
  /**
   * @example
   * polarx.x4.large.2e
   */
  nodeClass?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      computeNodeId: 'ComputeNodeId',
      dataNodeId: 'DataNodeId',
      id: 'Id',
      nodeClass: 'NodeClass',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeNodeId: 'string',
      dataNodeId: 'string',
      id: 'string',
      nodeClass: 'string',
      regionId: 'string',
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

