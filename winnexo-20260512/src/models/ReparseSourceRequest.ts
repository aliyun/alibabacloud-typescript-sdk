// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReparseSourceRequest extends $dara.Model {
  /**
   * @remarks
   * 是否同步等待重新解析完成；默认 false，异步入队
   * 
   * @example
   * false
   */
  forceSync?: boolean;
  /**
   * @remarks
   * 待重新解析的数据源 ID（租户内唯一）
   * 
   * This parameter is required.
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      forceSync: 'forceSync',
      sourceId: 'sourceId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forceSync: 'boolean',
      sourceId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

