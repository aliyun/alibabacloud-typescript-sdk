// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZonesRequest extends $dara.Model {
  /**
   * @remarks
   * The database engine.
   * 
   * @example
   * POLARDB
   */
  engine?: string;
  /**
   * @remarks
   * The engine extension.
   * 
   * @example
   * local
   */
  extra?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > Call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to view information about all available regions for your account, including region IDs.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      extra: 'Extra',
      regionId: 'RegionId',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      extra: 'string',
      regionId: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

