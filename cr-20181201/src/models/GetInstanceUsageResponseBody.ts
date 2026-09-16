// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The quota of Chart namespaces.
   * 
   * @example
   * 50
   */
  chartNamespaceQuota?: string;
  /**
   * @remarks
   * The number of Chart namespaces created.
   * 
   * @example
   * 2
   */
  chartNamespaceUsage?: string;
  /**
   * @remarks
   * The quota of Chart repositories.
   * 
   * @example
   * 5000
   */
  chartRepoQuota?: string;
  /**
   * @remarks
   * The number of Chart repositories created.
   * 
   * @example
   * 5
   */
  chartRepoUsage?: string;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * - `true`: The call was successful.
   * 
   * - `false`: The call failed.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The quota of image namespaces.
   * 
   * @example
   * 100
   */
  namespaceQuota?: string;
  /**
   * @remarks
   * The number of image namespaces used.
   * 
   * @example
   * 4
   */
  namespaceUsage?: string;
  /**
   * @remarks
   * The number of performance units, which indicates the additional instance capacity purchased on top of the Advanced Edition.
   * 
   * @example
   * 10
   */
  performanceUnits?: number;
  /**
   * @remarks
   * The quota of image repositories.
   * 
   * @example
   * 1000
   */
  repoQuota?: string;
  /**
   * @remarks
   * The number of image repositories used.
   * 
   * @example
   * 2
   */
  repoUsage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A726E801-7FCF-43F9-AF1C-51B3E65D3E7A
   */
  requestId?: string;
  /**
   * @remarks
   * The VPC quota.
   * 
   * @example
   * 5
   */
  vpcQuota?: string;
  /**
   * @remarks
   * The number of bound VPCs.
   * 
   * @example
   * 2
   */
  vpcUsage?: string;
  static names(): { [key: string]: string } {
    return {
      chartNamespaceQuota: 'ChartNamespaceQuota',
      chartNamespaceUsage: 'ChartNamespaceUsage',
      chartRepoQuota: 'ChartRepoQuota',
      chartRepoUsage: 'ChartRepoUsage',
      code: 'Code',
      isSuccess: 'IsSuccess',
      namespaceQuota: 'NamespaceQuota',
      namespaceUsage: 'NamespaceUsage',
      performanceUnits: 'PerformanceUnits',
      repoQuota: 'RepoQuota',
      repoUsage: 'RepoUsage',
      requestId: 'RequestId',
      vpcQuota: 'VpcQuota',
      vpcUsage: 'VpcUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chartNamespaceQuota: 'string',
      chartNamespaceUsage: 'string',
      chartRepoQuota: 'string',
      chartRepoUsage: 'string',
      code: 'string',
      isSuccess: 'boolean',
      namespaceQuota: 'string',
      namespaceUsage: 'string',
      performanceUnits: 'number',
      repoQuota: 'string',
      repoUsage: 'string',
      requestId: 'string',
      vpcQuota: 'string',
      vpcUsage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

