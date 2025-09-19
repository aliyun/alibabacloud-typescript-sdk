// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTotalStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The source of data. Default value: **aqs**. Valid values:
   * 
   * *   **sas**: Security Center
   * *   **aqs**: Server Guard
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The ID of the asset group.
   * 
   * > You can call the [DescribeAllGroups](https://help.aliyun.com/document_detail/130972.html) operation to query the IDs of asset groups.
   * 
   * @example
   * 8076980
   */
  groupId?: number;
  /**
   * @remarks
   * The name or public IP address of the asset.
   * 
   * @example
   * 222.185.XX.XX
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      groupId: 'GroupId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      groupId: 'number',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

