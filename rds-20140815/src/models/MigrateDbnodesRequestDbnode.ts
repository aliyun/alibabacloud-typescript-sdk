// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateDBNodesRequestDBNode extends $dara.Model {
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * rn-6256r4a87xvv7****
   */
  nodeId?: string;
  /**
   * @remarks
   * The ID of the zone in which the node resides.
   * 
   * @example
   * cn-hangzhou-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'nodeId',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
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

