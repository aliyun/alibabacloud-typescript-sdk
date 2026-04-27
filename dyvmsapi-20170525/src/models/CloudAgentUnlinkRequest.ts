// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudAgentUnlinkRequest extends $dara.Model {
  /**
   * @remarks
   * 座席工号；取值3-10位正整数，参数cno,uniqueId和requestUniqueId三选一
   * 
   * @example
   * 1111
   */
  cno?: string;
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
   * 请求唯一标识；参数cno,uniqueId和requestUniqueId三选一。注意：requestUniqueId挂机功能只在呼叫类型为webcall时生效，且需提前在管理后台将功能开启
   * 
   * @example
   * 1233456789
   */
  requestUniqueId?: string;
  /**
   * @remarks
   * 是否座席侧挂机；取值范围：1,2（数字含义，座席侧，非座席侧)，默认座席侧
   * 
   * @example
   * 1
   */
  side?: number;
  /**
   * @remarks
   * 通话唯一标识；参数cno,uniqueId和requestUniqueId三选一
   * 
   * @example
   * 1233456789
   */
  uniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      cno: 'Cno',
      enterpriseId: 'EnterpriseId',
      requestUniqueId: 'RequestUniqueId',
      side: 'Side',
      uniqueId: 'UniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cno: 'string',
      enterpriseId: 'number',
      requestUniqueId: 'string',
      side: 'number',
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

