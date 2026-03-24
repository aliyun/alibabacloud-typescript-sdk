// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusDashboardsRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values: zh and en. The default value is zh.
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

