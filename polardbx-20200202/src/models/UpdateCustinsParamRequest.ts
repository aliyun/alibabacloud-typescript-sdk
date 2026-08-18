// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCustinsParamRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-********
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The tag name.
   * 
   * This parameter is required.
   * 
   * @example
   * DataWarehouseExtractionAddress
   */
  name?: string;
  /**
   * @remarks
   * The region ID. > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196841.html) operation to query the regions supported by PolarDB-X, including region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * This parameter is required.
   * 
   * @example
   * load_test_4009266
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      name: 'Name',
      regionId: 'RegionId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      name: 'string',
      regionId: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

