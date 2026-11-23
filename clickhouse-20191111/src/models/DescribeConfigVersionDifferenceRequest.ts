// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfigVersionDifferenceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the change record. You can call the [DescribeConfigHistory](https://help.aliyun.com/document_detail/452209.html) operation to query the ID of the change record.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  changeId?: string;
  /**
   * @remarks
   * The cluster ID. You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/170879.html) operation to query all clusters in the specified region, including their cluster IDs.
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

