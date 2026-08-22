// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContext0ConfigRequest extends $dara.Model {
  /**
   * @remarks
   * 关联的 PolarDB-X 实例名（pxc- 前缀）
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-*********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

