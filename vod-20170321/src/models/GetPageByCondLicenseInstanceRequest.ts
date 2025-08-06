// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPageByCondLicenseInstanceRequest extends $dara.Model {
  contractNo?: string;
  instanceId?: string;
  /**
   * @example
   * true
   */
  needTotalCount?: boolean;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      contractNo: 'ContractNo',
      instanceId: 'InstanceId',
      needTotalCount: 'NeedTotalCount',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contractNo: 'string',
      instanceId: 'string',
      needTotalCount: 'boolean',
      pageNo: 'number',
      pageSize: 'number',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

