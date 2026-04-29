// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudGetAsrRequest extends $dara.Model {
  /**
   * @remarks
   * 当all=true时按照beignTime的顺序返回两侧对话文本
   * 
   * @example
   * true
   */
  all?: string;
  /**
   * @remarks
   * 通话类型；1:呼入,2:webcall,4:预览外呼,5:预测外呼,6:主叫外呼,9:内部呼叫
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  callType?: number;
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
   * 主通道的唯一标识
   * 
   * This parameter is required.
   * 
   * @example
   * sip-2-1490862368.123
   */
  mainUniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      callType: 'CallType',
      enterpriseId: 'EnterpriseId',
      mainUniqueId: 'MainUniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'string',
      callType: 'number',
      enterpriseId: 'number',
      mainUniqueId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

