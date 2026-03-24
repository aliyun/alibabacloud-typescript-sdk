// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPrometheusInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values: \\`zh\\` (Chinese) and \\`en\\` (English). Default value: \\`zh\\`.
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @remarks
   * The resource group ID.
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

