// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecProtectionGroupsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The switch of the API security module.
   * 
   * @example
   * 1
   */
  apisecStatus?: number;
  /**
   * @remarks
   * The switch of the compliance check feature.
   * 
   * @example
   * 0
   */
  reportStatus?: number;
  /**
   * @remarks
   * The name of the protected object group.
   * 
   * @example
   * group1
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The switch of the tracing and auditing feature.
   * 
   * @example
   * 0
   */
  traceStatus?: number;
  static names(): { [key: string]: string } {
    return {
      apisecStatus: 'ApisecStatus',
      reportStatus: 'ReportStatus',
      resourceGroup: 'ResourceGroup',
      traceStatus: 'TraceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apisecStatus: 'number',
      reportStatus: 'number',
      resourceGroup: 'string',
      traceStatus: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecProtectionGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The protected object groups.
   */
  data?: DescribeApisecProtectionGroupsResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19****5EB0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of protected object groups.
   * 
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeApisecProtectionGroupsResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

