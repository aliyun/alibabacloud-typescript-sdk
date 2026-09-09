// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUuidsByVulNamesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the vulnerability is handled. Valid values:
   * - **y**: Handled.
   * - **n**: Not handled.
   * 
   * @example
   * n
   */
  dealed?: string;
  /**
   * @remarks
   * The name of the container search field.
   * 
   * @example
   * namespace
   */
  fieldName?: string;
  /**
   * @remarks
   * The value of the container search field.
   * 
   * @example
   * cas-adad-qeqwe
   */
  fieldValue?: string;
  /**
   * @remarks
   * The ID of the asset group.
   * 
   * @example
   * 11286014
   */
  groupId?: number;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The vulnerability level. Separate multiple levels with commas (,). Valid values:
   * 
   * - **high**: High.
   * - **medium**: Medium.
   * - **low**: Low.
   * 
   * @example
   * high,low
   */
  level?: string;
  /**
   * @remarks
   * The priority level of the vulnerability fix. Separate multiple levels with commas (,). Valid values:
   * 
   * - **asap**: High.
   * - **later**: Medium.
   * - **nntf**: Low.
   * 
   * @example
   * asap,later,nntf
   */
  necessity?: string;
  /**
   * @remarks
   * The asset information for the vulnerability query. You can set this parameter to the asset name, public IP address, or private IP address. Fuzzy match is supported.
   * 
   * @example
   * 10.7.
   */
  remark?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member accounts in the resource directory.
   * > You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The tag for querying vulnerabilities.
   * 
   * @example
   * oval
   */
  searchTags?: string;
  /**
   * @remarks
   * The fix status of the vulnerability. Separate multiple statuses with commas (,). Valid values:
   * 
   * - **1**: Unfixed.
   * - **2**: Fix failed.
   * 
   * @example
   * 1,2
   */
  statusList?: string;
  /**
   * @remarks
   * The vulnerability tag.
   * 
   * @example
   * oval
   */
  tag?: string;
  /**
   * @remarks
   * The query type. Valid values:
   * 
   * - **containerId**: container ID
   * - **uuid**: asset ID
   * 
   * @example
   * uuid
   */
  targetType?: string;
  /**
   * @remarks
   * The type of vulnerability to query. Valid values:
   * 
   * - **cve**: Linux software vulnerability
   * - **sys**: Windows system vulnerability
   * 
   * This parameter is required.
   * 
   * @example
   * cve
   */
  type?: string;
  /**
   * @remarks
   * The instance IDs of VPC-connected instances to query for vulnerabilities. Separate multiple instance IDs with commas (,).
   * 
   * @example
   * vpc-uf6ssrvbrwe37ekw****,vpc-bp1aevy8sofi8mh1q****
   */
  vpcInstanceIds?: string;
  /**
   * @remarks
   * The collection of vulnerability names.
   * > You can call the [DescribeGroupedVul](~~DescribeGroupedVul~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   */
  vulNames?: string[];
  static names(): { [key: string]: string } {
    return {
      dealed: 'Dealed',
      fieldName: 'FieldName',
      fieldValue: 'FieldValue',
      groupId: 'GroupId',
      lang: 'Lang',
      level: 'Level',
      necessity: 'Necessity',
      remark: 'Remark',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      searchTags: 'SearchTags',
      statusList: 'StatusList',
      tag: 'Tag',
      targetType: 'TargetType',
      type: 'Type',
      vpcInstanceIds: 'VpcInstanceIds',
      vulNames: 'VulNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dealed: 'string',
      fieldName: 'string',
      fieldValue: 'string',
      groupId: 'number',
      lang: 'string',
      level: 'string',
      necessity: 'string',
      remark: 'string',
      resourceDirectoryAccountId: 'number',
      searchTags: 'string',
      statusList: 'string',
      tag: 'string',
      targetType: 'string',
      type: 'string',
      vpcInstanceIds: 'string',
      vulNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vulNames)) {
      $dara.Model.validateArray(this.vulNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

