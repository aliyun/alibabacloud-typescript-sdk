// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTotalStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The source of the data request. Default value: **aqs**. Valid values:
   * - **sas**: The data request comes from Security Center.
   * - **aqs**: The data request comes from Server Guard.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The ID of the asset group to query.
   * > You can call the [DescribeAllGroups](https://help.aliyun.com/document_detail/130972.html) operation to obtain this parameter.
   * 
   * @example
   * 8076980
   */
  groupId?: number;
  /**
   * @remarks
   * The asset name or public IP address.
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

