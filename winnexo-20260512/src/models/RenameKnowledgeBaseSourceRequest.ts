// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenameKnowledgeBaseSourceRequest extends $dara.Model {
  /**
   * @remarks
   * 新的数据源名称
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  newName?: string;
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
      newName: 'newName',
      sourceId: 'sourceId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newName: 'string',
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

