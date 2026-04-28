// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudGetObCdrRequest extends $dara.Model {
  /**
   * @remarks
   * 呼叫中心 id
   * 
   * This parameter is required.
   * 
   * @example
   * 7000002
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 电话唯一标识；对应座席外呼通话记录的uniqueId
   * 
   * This parameter is required.
   * 
   * @example
   * uniq_1-162046xxxx.12
   */
  uniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      enterpriseId: 'EnterpriseId',
      uniqueId: 'UniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseId: 'number',
      uniqueId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

