// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfigVersionDifferenceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the change record. Call the [DescribeConfigHistory](https://help.aliyun.com/document_detail/452209.html) operation to query the IDs of change records.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  changeId?: string;
  /**
   * @remarks
   * The cluster ID. Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/170879.html) operation to query the IDs of all clusters in the destination region.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp1tm8zf130ew****
   */
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      changeId: 'ChangeId',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeId: 'string',
      DBClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

