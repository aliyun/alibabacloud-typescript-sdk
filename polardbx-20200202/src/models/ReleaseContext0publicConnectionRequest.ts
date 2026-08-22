// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseContext0PublicConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The public network connection string to release. If this parameter is not specified, the Mem0 public address is subject to automatic release.
   * 
   * @example
   * pxc-hzjasdyuoo.polarx.rds.aliyuncs.com
   */
  currentConnectionString?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-htri0****r4k9p
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The target node type. Valid values:
   * - service
   * - dashboard
   * 
   * @example
   * dn
   */
  nodeType?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      currentConnectionString: 'CurrentConnectionString',
      DBInstanceName: 'DBInstanceName',
      nodeType: 'NodeType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentConnectionString: 'string',
      DBInstanceName: 'string',
      nodeType: 'string',
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

