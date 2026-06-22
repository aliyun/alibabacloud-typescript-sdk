// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupedVulRequest extends $dara.Model {
  /**
   * @remarks
   * The alias of the vulnerability to query.
   * 
   * @example
   * RHSA-2019:0230-Important: polkit security update
   */
  aliasName?: string;
  /**
   * @remarks
   * The Asset Type where the vulnerability is detected. Separate multiple types with commas (,). Valid values:
   * - **ECS**: host asset
   * - **CONTAINER**: container asset.
   * 
   * @example
   * ECS,CONTAINER
   */
  assetType?: string;
  /**
   * @remarks
   * The vulnerability type. This query condition is valid only for application vulnerabilities. Separate multiple values with commas (,). Valid values:
   * - **sca**: software constituency parsing vulnerability
   * - **app**: application vulnerability.
   * 
   * @example
   * sca
   */
  attachTypes?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c88fb10da1168494091db6aafc5dd****
   */
  clusterId?: string;
  /**
   * @remarks
   * The container search field. Valid values:
   * 
   * - **instanceId**: instance ID
   * - **appName**: application name
   * - **clusterId**: cluster ID
   * - **regionId**: region
   * - **nodeName**: node name
   * - **namespace**: namespace
   * - **clusterName**: cluster name
   * - **image**: image name
   * - **imageRepoName**: image repository name
   * - **imageRepoNamespace**: image repository namespace
   * - **imageRepoTag**: image tag
   * - **imageDigest**: image digest.
   * 
   * @example
   * appName
   */
  containerFieldName?: string;
  /**
   * @remarks
   * The value that corresponds to **ContainerFieldName**.
   * 
   * @example
   * cc914b0df156d40148412afe4a581****
   */
  containerFieldValue?: string;
  /**
   * @remarks
   * The page number of the first page to display in the query results. Default value: **1**, which indicates that the results start from page 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The CVE ID.
   * > Call the [DescribeVulListPage](~~DescribeVulListPage~~) operation to obtain this parameter.
   * 
   * @example
   * CVE-2017-15420
   */
  cveId?: string;
  /**
   * @remarks
   * Specifies whether the vulnerability is handled. Valid values:
   * 
   * - **y**: handled
   * - **n**: not handled.
   * 
   * @example
   * n
   */
  dealed?: string;
  /**
   * @remarks
   * The ID of the asset group.
   * 
   * @example
   * 235454
   */
  groupId?: string;
  /**
   * @remarks
   * The language type of the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The priority of the vulnerability fix to query. Separate multiple priorities with commas (,). Valid values:
   * 
   * - **asap**: high
   * - **later**: medium
   * - **nntf**: low.
   * 
   * @example
   * asap,later,nntf
   */
  necessity?: string;
  /**
   * @remarks
   * The number of vulnerability entries per page in a paged query. Default value: 10, which indicates that 10 vulnerability entries are displayed per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether Runtime Application Self-Protection (RASP) supports real-time protection against the vulnerability. Valid values:
   * 
   * - **0**: Not supported.
   * - **1**: Supported.
   * 
   * @example
   * 1
   */
  raspDefend?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is added as one of the member accounts in a resource folder.
   * > Invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The label used for filtering. Valid values:
   * 
   * - **Restart required**
   * - **Remote utilization**
   * - **EXP exists**
   * - **Available**
   * - **Privilege escalation**
   * - **Code execution**
   * 
   * @example
   * Code Execution
   */
  searchTags?: string;
  /**
   * @remarks
   * The container query type. Valid values:
   * 
   * - **containerId**: container ID
   * - **uuid**: asset ID.
   * 
   * @example
   * containerId
   */
  targetType?: string;
  /**
   * @remarks
   * The type of the vulnerability to query. Default value: cve. Valid values:
   * 
   * - **cve**: Linux software vulnerability
   * - **sys**: Windows system vulnerability
   * - **cms**: Web-CMS vulnerability
   * - **app**: application vulnerability (network scan)
   * - **sca**: application vulnerability (software constituency parsing).
   * 
   * @example
   * cve
   */
  type?: string;
  /**
   * @remarks
   * The UUIDs of the servers to query. Separate multiple UUIDs with commas (,).
   * 
   * @example
   * d42f938c-d962-48a0-90f9-05e4ea****
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      assetType: 'AssetType',
      attachTypes: 'AttachTypes',
      clusterId: 'ClusterId',
      containerFieldName: 'ContainerFieldName',
      containerFieldValue: 'ContainerFieldValue',
      currentPage: 'CurrentPage',
      cveId: 'CveId',
      dealed: 'Dealed',
      groupId: 'GroupId',
      lang: 'Lang',
      necessity: 'Necessity',
      pageSize: 'PageSize',
      raspDefend: 'RaspDefend',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      searchTags: 'SearchTags',
      targetType: 'TargetType',
      type: 'Type',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      assetType: 'string',
      attachTypes: 'string',
      clusterId: 'string',
      containerFieldName: 'string',
      containerFieldValue: 'string',
      currentPage: 'number',
      cveId: 'string',
      dealed: 'string',
      groupId: 'string',
      lang: 'string',
      necessity: 'string',
      pageSize: 'number',
      raspDefend: 'number',
      resourceDirectoryAccountId: 'number',
      searchTags: 'string',
      targetType: 'string',
      type: 'string',
      uuids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

