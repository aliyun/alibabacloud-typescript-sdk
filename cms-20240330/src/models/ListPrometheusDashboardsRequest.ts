// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusDashboardsRequest extends $dara.Model {
  /**
   * @remarks
   * The language. Default value: zh. Valid values:
   * - zh: Chinese.
   * - en: English.
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
   * rg-acfm3gn5i6bigbi
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

