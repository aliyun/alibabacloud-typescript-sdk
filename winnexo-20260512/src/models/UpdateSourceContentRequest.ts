// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSourceContentRequest extends $dara.Model {
  /**
   * @remarks
   * 更新后的完整正文；允许空字符串
   * 
   * This parameter is required.
   * 
   * @example
   * 示例内容
   */
  content?: string;
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
   * 数据源 ID（租户内唯一）
   * 
   * This parameter is required.
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * 租户ID，公共参数；winnexo-cli 通过 --tenant-id 显式传入
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      forceSync: 'forceSync',
      sourceId: 'sourceId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
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

