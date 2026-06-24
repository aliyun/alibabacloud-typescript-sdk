// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseMem0PublicConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * The public endpoint to be released. This parameter is optional. If this parameter is not specified, the public endpoint of Mem0 is automatically released.
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
   * The region ID of the instance. > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196841.html) operation to query the details of regions supported by PolarDB-X, including region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      currentConnectionString: 'CurrentConnectionString',
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentConnectionString: 'string',
      DBInstanceName: 'string',
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

