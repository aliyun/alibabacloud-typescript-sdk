// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKnowledgeBaseSourceRequest extends $dara.Model {
  /**
   * @remarks
   * 知识 ID（数据源唯一标识）
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
   * 676577544219585
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceId: 'sourceId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

