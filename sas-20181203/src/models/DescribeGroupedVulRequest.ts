// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupedVulRequest extends $dara.Model {
  /**
   * @remarks
   * The alias of the vulnerability.
   * 
   * @example
   * RHSA-2019:0230-Important: polkit security update
   */
  aliasName?: string;
  /**
   * @remarks
   * The type of the asset on which the vulnerability is detected. Separate multiple types with commas (,). Valid values:
   * 
   * *   **ECS**: Elastic Compute Service (ECS) instance
   * *   **CONTAINER**: container
   * 
   * @example
   * ECS,CONTAINER
   */
  assetType?: string;
  /**
   * @remarks
   * The type of the vulnerability. This parameter is valid only for application vulnerabilities. Separate multiple values with commas (,). Valid values:
   * 
   * *   **sca**: vulnerability that is detected based on software component analysis
   * *   **app**: application vulnerability
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
   * The key of the condition that is used to query containers. Valid values:
   * 
   * *   **instanceId**: the ID of the asset
   * *   **appName**: the name of the application
   * *   **clusterId**: the ID of the cluster
   * *   **regionId**: the ID of the region
   * *   **nodeName**: the name of the node
   * *   **namespace**: the namespace
   * *   **clusterName**: the name of the cluster
   * *   **image**: the name of the image
   * *   **imageRepoName**: the name of the image repository
   * *   **imageRepoNamespace**: the namespace to which the image repository belongs
   * *   **imageRepoTag**: the tag that is added to the image
   * *   **imageDigest**: the digest of the image
   * 
   * @example
   * appName
   */
  containerFieldName?: string;
  /**
   * @remarks
   * The value specified by **ContainerFieldName**.
   * 
   * @example
   * cc914b0df156d40148412afe4a581****
   */
  containerFieldValue?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The CVE ID.
   * 
   * >  You can call the [DescribeVulListPage](~~DescribeVulListPage~~) operation to query the CVE ID.
   * 
   * @example
   * CVE-2017-15420
   */
  cveId?: string;
  /**
   * @remarks
   * Specifies whether the vulnerability is handled. Valid values:
   * 
   * *   **y**: handled
   * *   **n**: not handled
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
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The priorities to fix the vulnerabilities. Separate multiple priorities with commas (,). Valid values:
   * 
   * *   **asap**: high
   * *   **later**: medium
   * *   **nntf**: low
   * 
   * @example
   * asap,later,nntf
   */
  necessity?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  raspDefend?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member in the resource directory.
   * 
   * >  You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to query the account ID.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The tag that is used to search for the vulnerability. Valid values:
   * 
   * *   **Restart required**
   * *   **Remote utilization**
   * *   **EXP exists**
   * *   **Available**
   * *   **Elevation of Privilege**
   * *   **Code Execution**
   * 
   * @example
   * Code Execution
   */
  searchTags?: string;
  /**
   * @remarks
   * The query type for containers. Valid values:
   * 
   * *   **containerId**: the ID of the container
   * *   **uuid**: the ID of the asset
   * 
   * @example
   * containerId
   */
  targetType?: string;
  /**
   * @remarks
   * The type of the vulnerability that you want to query. Default value: cve. Valid values:
   * 
   * *   **cve**: Linux software vulnerability
   * *   **sys**: Windows system vulnerability
   * *   **cms**: Web-CMS vulnerability
   * *   **app**: application vulnerability that is detected by network scanning
   * *   **sca**: application vulnerability that is detected by software component analysis
   * 
   * @example
   * cve
   */
  type?: string;
  /**
   * @remarks
   * The UUID of the server. Separate multiple UUIDs with commas (,).
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

