// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyColumnarClassRequest extends $dara.Model {
  /**
   * @remarks
   * The column store specification.
   * 
   * This parameter is required.
   * 
   * @example
   * polarx.n8.large.col
   */
  columnarClass?: string;
  /**
   * @remarks
   * The number of column store nodes.
   * 
   * @example
   * 2
   */
  columnarNodeCount?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-hzrh51fze****pon-cdc
   */
  instanceName?: string;
  /**
   * @remarks
   * The region where the instance resides. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196841.html) operation to view the regions supported by PolarDB-X, including region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The switch mode.
   * 
   * @example
   * 0
   */
  switchMode?: string;
  static names(): { [key: string]: string } {
    return {
      columnarClass: 'ColumnarClass',
      columnarNodeCount: 'ColumnarNodeCount',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
      switchMode: 'SwitchMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnarClass: 'string',
      columnarNodeCount: 'string',
      instanceName: 'string',
      regionId: 'string',
      switchMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

