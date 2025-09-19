// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAllRegionsStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The source of the request. Default value: **aqs**. Valid values:
   * 
   * *   **sas**: Security Center.
   * *   **aqs**: Server Guard.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The ID of the asset group that you want to query.
   * 
   * >  You can call the [DescribeAllGroups](https://help.aliyun.com/document_detail/130972.html) operation to query the ID.
   * 
   * @example
   * 1161****
   */
  groupId?: number;
  /**
   * @remarks
   * The name or public IP address of the asset.
   * 
   * @example
   * 192.168.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 33.80.XXX.XXX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      groupId: 'GroupId',
      remark: 'Remark',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'string',
      groupId: 'number',
      remark: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

