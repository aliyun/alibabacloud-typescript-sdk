// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransformOperationRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pxc-xxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The type of the operation.
   * 
   * @example
   * finish
   */
  operation?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides. > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196841.html) operation to query the regions supported by PolarDB-X, including region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      operation: 'Operation',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      operation: 'string',
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

