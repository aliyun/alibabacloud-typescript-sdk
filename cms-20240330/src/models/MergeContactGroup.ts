// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MergeContactGroup extends $dara.Model {
  /**
   * @remarks
   * 组内成员的唯一标识符列表。
   */
  contacts?: string[];
  /**
   * @remarks
   * 扩展字段，用于存储额外信息。
   * 
   * @example
   * { "department": "运维部", "role": "工程师" }
   */
  extend?: { [key: string]: any };
  /**
   * @remarks
   * 创建时间。
   * 
   * @example
   * 2025-03-11T08:21:58.789Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * 最后修改时间。
   * 
   * @example
   * 2025-03-11T08:21:58.789Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * 联系人组唯一标识符。
   * 
   * @example
   * group-12345
   */
  identifier?: string;
  /**
   * @remarks
   * 联系人组名称。
   * 
   * @example
   * 运维团队
   */
  name?: string;
  /**
   * @remarks
   * 联系人组来源系统。
   * 
   * @example
   * dingtalk
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      contacts: 'contacts',
      extend: 'extend',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      identifier: 'identifier',
      name: 'name',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contacts: { 'type': 'array', 'itemType': 'string' },
      extend: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreate: 'string',
      gmtModified: 'string',
      identifier: 'string',
      name: 'string',
      source: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contacts)) {
      $dara.Model.validateArray(this.contacts);
    }
    if(this.extend) {
      $dara.Model.validateMap(this.extend);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

