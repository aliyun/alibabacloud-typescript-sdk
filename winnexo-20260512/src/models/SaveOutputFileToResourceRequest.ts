// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveOutputFileToResourceRequest extends $dara.Model {
  /**
   * @remarks
   * 目标个人目录 ID；不传则自动解析用户默认目录。
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * itemIds
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  itemIds?: string[];
  /**
   * @remarks
   * 保存方式：link=链接（1:1 幂等，编辑产出会同步资源） / copy=复制（不限次，快照）
   * 
   * @example
   * link
   */
  mode?: string;
  /**
   * @remarks
   * 租户ID，公共参数；winnexo-cli 通过 --tenant-id 显式传入
   * 
   * @example
   * string_value
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'directoryId',
      itemIds: 'itemIds',
      mode: 'mode',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      itemIds: { 'type': 'array', 'itemType': 'string' },
      mode: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.itemIds)) {
      $dara.Model.validateArray(this.itemIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

