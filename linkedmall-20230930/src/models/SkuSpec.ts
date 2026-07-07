// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SkuSpec extends $dara.Model {
  /**
   * @remarks
   * Specification key
   * 
   * @example
   * 颜色分类
   */
  key?: string;
  /**
   * @remarks
   * Specification ID
   * 
   * @example
   * 1000
   */
  keyId?: number;
  /**
   * @remarks
   * Specification value
   * 
   * @example
   * 天蓝色
   */
  value?: string;
  /**
   * @remarks
   * Specification value alias (Recommendation: If this field is not empty (null), use its value as the frontend display specification; if this field is empty (null), use the value field as the frontend display specification.)
   * 
   * @example
   * 秘色
   */
  valueAlias?: string;
  /**
   * @remarks
   * Specification value ID
   * 
   * @example
   * 1000
   */
  valueId?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      keyId: 'keyId',
      value: 'value',
      valueAlias: 'valueAlias',
      valueId: 'valueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      keyId: 'number',
      value: 'string',
      valueAlias: 'string',
      valueId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

