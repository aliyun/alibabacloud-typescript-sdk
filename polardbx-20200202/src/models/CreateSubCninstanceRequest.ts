// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSubCNInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/196830.html) operation to query the details of all instances in the specified region, including the instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * pxc-hzravgpt8q****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * Specifies whether to automatically configure compute resource parameters.
   * - **true**:
   */
  isAutoCreate?: boolean;
  /**
   * @remarks
   * The read/write type. Valid values: ReadWrite (row store read/write) and ColumnarRead (column store read-only).
   * 
   * @example
   * ReadWrite
   */
  readType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      isAutoCreate: 'IsAutoCreate',
      readType: 'ReadType',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      isAutoCreate: 'boolean',
      readType: 'string',
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

