// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPrometheusViewRequest extends $dara.Model {
  /**
   * @remarks
   * The language. Valid values: zh (Chinese) and en (English). Default: zh.
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2bhocin5e2na
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunLang: 'aliyunLang',
      resourceGroupId: 'resourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunLang: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

