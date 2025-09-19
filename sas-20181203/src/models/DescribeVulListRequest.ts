// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulListRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * @example
   * RHSA-2019:0230-Important: polkit security update
   */
  aliasName?: string;
  /**
   * @remarks
   * The additional type of the vulnerabilities. You need to specify this parameter when you query application vulnerabilities. Set the value to **sca**. If you set **Type** to **app**, you must specify this parameter.
   * 
   * > If you set this parameter to **sca**, application vulnerabilities and the vulnerabilities that are detected based on software component analysis are queried. If you do not specify this parameter, only application vulnerabilities are queried.
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
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether the vulnerabilities are fixed. Valid values:
   * 
   * *   **y**: yes
   * *   **n**: no
   * 
   * @example
   * n
   */
  dealed?: string;
  /**
   * @remarks
   * The ID of the asset group.
   * 
   * > You can call the [DescribeAllGroups](~~DescribeAllGroups~~) operation to query the IDs of asset groups.
   * 
   * @example
   * 9207613
   */
  groupId?: string;
  /**
   * @remarks
   * The IDs of vulnerabilities. You can specify up to 50 IDs. Separate multiple IDs with commas (,).
   * 
   * @example
   * 282,281,283
   */
  ids?: string;
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
   * The alias of the vulnerability.
   * 
   * @example
   * oval:com.redhat.rhsa:def:20172836
   */
  name?: string;
  /**
   * @remarks
   * The priority to fix the vulnerability. Separate multiple priorities with commas (,). Valid values:
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
   * The pagination token that is used in the next request to retrieve a new page of results. You must specify the token that is obtained from the previous query as the value of NextToken. You do not need to specify this parameter for the first request.
   * 
   * @example
   * E17B501887A2D3AA5E8360A6EFA3B***
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates whether the application protection feature is supported. Valid values:
   * 
   * - **0**: no.
   * 
   * - **1**: yes.
   * 
   * @example
   * 0
   */
  raspDefend?: number;
  /**
   * @remarks
   * The remarks for the asset affected by the vulnerability. The value can be the private IP address, public IP address, or name of the asset.
   * 
   * @example
   * 1.2.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member in the resource directory.
   * 
   * >  You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain the IDs.
   * 
   * @example
   * 1232428423234****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The status of the vulnerability. Separate multiple statuses with commas (,). Valid values:
   * 
   * - 1: unfixed
   * - 2: fix failed
   * - 3: rollback failed
   * - 4: being fixed
   * - 5: being rolled back
   * - 6: being verified
   * - 7: fixed
   * - 8: fixed and to be restarted
   * - 9: rolled back
   * - 10: ignored
   * - 11: rolled back and to be restarted
   * - 12: not found
   * - 20: expired
   * 
   * @example
   * 1,2,3
   */
  statusList?: string;
  /**
   * @remarks
   * The type of the asset on which the vulnerability is detected. Valid values:
   * 
   * *   **k8s**: Kubernetes component.
   * *   **uuid**: server.
   * *   **containerId**: container.
   * 
   * @example
   * k8s
   */
  targetType?: string;
  /**
   * @remarks
   * The type of the vulnerability. Valid values:
   * 
   * *   **cve**: Linux software vulnerability
   * *   **sys**: Windows system vulnerability
   * *   **cms**: Web-CMS vulnerability.
   * *   **app**: application vulnerability that is detected by using web scanner
   * *   **emg**: urgent vulnerability.
   * *   **sca**: application vulnerability that is detected by using software component analysis
   * 
   * This parameter is required.
   * 
   * @example
   * cve
   */
  type?: string;
  /**
   * @remarks
   * Specifies whether to use NextToken to query the data of vulnerabilities. If you set UseNextToken to true, the value of TotalCount is not returned. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  useNextToken?: boolean;
  /**
   * @remarks
   * The UUIDs of the servers on which you want to query the vulnerabilities. Separate multiple UUIDs with commas (,).
   * 
   * >  You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to obtain the UUIDs.
   * 
   * @example
   * 1587bedb-fdb4-48c4-9330-****
   */
  uuids?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the vulnerabilities are detected. Separate multiple IDs with commas (,).
   * 
   * @example
   * ins-133****,ins-5414****
   */
  vpcInstanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      attachTypes: 'AttachTypes',
      clusterId: 'ClusterId',
      currentPage: 'CurrentPage',
      dealed: 'Dealed',
      groupId: 'GroupId',
      ids: 'Ids',
      lang: 'Lang',
      name: 'Name',
      necessity: 'Necessity',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      raspDefend: 'RaspDefend',
      remark: 'Remark',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      statusList: 'StatusList',
      targetType: 'TargetType',
      type: 'Type',
      useNextToken: 'UseNextToken',
      uuids: 'Uuids',
      vpcInstanceIds: 'VpcInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      attachTypes: 'string',
      clusterId: 'string',
      currentPage: 'number',
      dealed: 'string',
      groupId: 'string',
      ids: 'string',
      lang: 'string',
      name: 'string',
      necessity: 'string',
      nextToken: 'string',
      pageSize: 'number',
      raspDefend: 'number',
      remark: 'string',
      resourceDirectoryAccountId: 'number',
      statusList: 'string',
      targetType: 'string',
      type: 'string',
      useNextToken: 'boolean',
      uuids: 'string',
      vpcInstanceIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

