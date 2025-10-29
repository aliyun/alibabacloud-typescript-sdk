// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarFsQuotaResponseBodyPolicyItems extends $dara.Model {
  /**
   * @example
   * 7200
   */
  accessTTL?: number;
  /**
   * @example
   * 7200
   */
  changeTTL?: number;
  /**
   * @example
   * NULL
   */
  description?: string;
  /**
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @example
   * NULL
   */
  exclude?: string;
  /**
   * @example
   * 77
   */
  fileCountLimit?: number;
  /**
   * @example
   * 73
   */
  id?: number;
  /**
   * @example
   * /a*
   */
  include?: string;
  /**
   * @example
   * xxxxx
   */
  name?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * 1
   */
  sizeLimit?: number;
  static names(): { [key: string]: string } {
    return {
      accessTTL: 'AccessTTL',
      changeTTL: 'ChangeTTL',
      description: 'Description',
      enabled: 'Enabled',
      exclude: 'Exclude',
      fileCountLimit: 'FileCountLimit',
      id: 'Id',
      include: 'Include',
      name: 'Name',
      priority: 'Priority',
      sizeLimit: 'SizeLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTTL: 'number',
      changeTTL: 'number',
      description: 'string',
      enabled: 'boolean',
      exclude: 'string',
      fileCountLimit: 'number',
      id: 'number',
      include: 'string',
      name: 'string',
      priority: 'number',
      sizeLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePolarFsQuotaResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 5
   */
  pageRecordCount?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * pfs-2ze0i74ka607*****
   */
  polarFsInstanceId?: string;
  policyItems?: DescribePolarFsQuotaResponseBodyPolicyItems[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2FED790E-FB61-4721-8C1C-07C627******
   */
  requestId?: string;
  /**
   * @example
   * 5
   */
  totalRecordCount?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      pageSize: 'PageSize',
      polarFsInstanceId: 'PolarFsInstanceId',
      policyItems: 'PolicyItems',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageRecordCount: 'string',
      pageSize: 'string',
      polarFsInstanceId: 'string',
      policyItems: { 'type': 'array', 'itemType': DescribePolarFsQuotaResponseBodyPolicyItems },
      requestId: 'string',
      totalRecordCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyItems)) {
      $dara.Model.validateArray(this.policyItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

