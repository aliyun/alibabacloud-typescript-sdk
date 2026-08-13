// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserVisibleKnowledgeBasesRequest extends $dara.Model {
  /**
   * @remarks
   * 知识库名称或描述关键词；不传时返回全部可见知识库
   * 
   * @example
   * 产品知识
   */
  keyword?: string;
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
      keyword: 'keyword',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
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

