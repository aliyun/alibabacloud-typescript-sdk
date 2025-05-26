// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GetIpfilterListResponseBodyDataIpfilters extends $dara.Model {
  /**
   * @remarks
   * timestamp
   * 
   * @example
   * 1653547140
   */
  createTime?: string;
  /**
   * @remarks
   * Record ID
   * 
   * @example
   * 10083
   */
  id?: string;
  /**
   * @remarks
   * IP address/IP range/IP segment
   * 
   * @example
   * xxx.xxx.xxx.xxx
   * xxx.xxx.xxx.xxx-xxx.xxx.xxx.xxx
   * xxx.xxx.xxx.xxx/xxx
   */
  ipAddress?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
      ipAddress: 'IpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      id: 'string',
      ipAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

