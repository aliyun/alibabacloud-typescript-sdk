// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IncidentPlanFieldPath extends $dara.Model {
  /**
   * @remarks
   * 字段别名。
   * 
   * @example
   * 服务名称
   */
  fieldAlias?: string;
  /**
   * @remarks
   * 字段路径的列表。
   */
  fieldPath?: string[];
  static names(): { [key: string]: string } {
    return {
      fieldAlias: 'fieldAlias',
      fieldPath: 'fieldPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldAlias: 'string',
      fieldPath: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.fieldPath)) {
      $dara.Model.validateArray(this.fieldPath);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

