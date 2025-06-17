// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnUserDomainsByFuncRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the feature.
   * 
   * For example, the ID of the origin host feature (set_req_host_header) is 18.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  funcId?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * Valid values: **1** to **100000**.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of domain names to return on each page. Default value: **20**.
   * 
   * Valid values: **1** to **50**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-xxxxx
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      funcId: 'FuncId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      funcId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
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

