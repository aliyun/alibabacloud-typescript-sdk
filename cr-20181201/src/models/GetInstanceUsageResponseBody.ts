// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The quota of chart namespaces.
   * 
   * @example
   * 50
   */
  chartNamespaceQuota?: string;
  /**
   * @remarks
   * The number of chart namespaces that are created in the instance.
   * 
   * @example
   * 2
   */
  chartNamespaceUsage?: string;
  /**
   * @remarks
   * The quota of chart repositories for the instance.
   * 
   * @example
   * 5000
   */
  chartRepoQuota?: string;
  /**
   * @remarks
   * The number of chart repositories that are created.
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
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The quota of image namespaces for the instance.
   * 
   * @example
   * 100
   */
  namespaceQuota?: string;
  /**
   * @remarks
   * The number of image namespaces that are created in the instance.
   * 
   * @example
   * 4
   */
  namespaceUsage?: string;
  /**
   * @remarks
   * The quota of image repositories for the instance.
   * 
   * @example
   * 1000
   */
  repoQuota?: string;
  /**
   * @remarks
   * The number of image repositories that are created in the instance.
   * 
   * @example
   * 2
   */
  repoUsage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A726E801-7FCF-43F9-AF1C-51B3E65D3E7A
   */
  requestId?: string;
  /**
   * @remarks
   * VPC quota
   * 
   * @example
   * 5
   */
  vpcQuota?: string;
  /**
   * @remarks
   * Number of bound VPCs
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

