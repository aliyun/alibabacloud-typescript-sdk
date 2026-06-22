// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSuspiciousStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the asset groups that you want to query. Separate multiple asset group IDs with commas (,).
   * > You can call the [DescribeAllGroups](~~DescribeAllGroups~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 9997897
   */
  groupIdList?: string;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 10.12.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      groupIdList: 'GroupIdList',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIdList: 'string',
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

