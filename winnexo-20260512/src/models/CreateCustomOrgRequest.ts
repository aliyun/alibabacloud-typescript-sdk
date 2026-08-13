// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomOrgRequest extends $dara.Model {
  /**
   * @remarks
   * 自定义组织标识，格式：^[a-z0-9][a-z0-9\-]{2,63}$
   * 
   * This parameter is required.
   * 
   * @example
   * exampleCorpId
   */
  corpId?: string;
  /**
   * @remarks
   * 组织展示名称（可选，不传则与 corpId 相同）
   * 
   * @example
   * string_value
   */
  corpName?: string;
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
      corpId: 'corpId',
      corpName: 'corpName',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      corpId: 'string',
      corpName: 'string',
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

