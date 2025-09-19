// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUuidsByVulNamesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the vulnerability is fixed. Valid values:
   * 
   * *   **y**: the vulnerability is fixed.
   * *   **n**: the vulnerability is not fixed.
   * 
   * @example
   * n
   */
  dealed?: string;
  /**
   * @remarks
   * The name of the search field that is used to query containers.
   * 
   * @example
   * namespace
   */
  fieldName?: string;
  /**
   * @remarks
   * The value of the search field that is used to query containers.
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
   * The severity of the vulnerability. Separate multiple severities with commas (,). Valid values:
   * 
   * *   **high**
   * *   **medium**
   * *   **low**
   * 
   * @example
   * high,low
   */
  level?: string;
  /**
   * @remarks
   * The priority based on which the vulnerability is fixed. Separate multiple priorities with commas (,). Valid values:
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
   * The remarks for the asset affected by the vulnerability. The value can be the private IP address, public IP address, or name of the asset. Fuzzy match is supported.
   * 
   * @example
   * 10.7.
   */
  remark?: string;
  /**
   * @remarks
   * The tags that are used to search for the vulnerability.
   * 
   * @example
   * oval
   */
  searchTags?: string;
  /**
   * @remarks
   * The status of the vulnerability. Separate multiple states with commas (,). Valid values:
   * 
   * *   **1**: unfixed
   * *   **2**: fix failed
   * 
   * @example
   * 1,4
   */
  statusList?: string;
  /**
   * @remarks
   * The tag of the vulnerability.
   * 
   * @example
   * oval
   */
  tag?: string;
  /**
   * @remarks
   * The type of the query condition. Valid values:
   * 
   * *   **containerId**: the ID of the container
   * *   **uuid**: the ID of the asset
   * 
   * @example
   * uuid
   */
  targetType?: string;
  /**
   * @remarks
   * The type of the vulnerability. Valid values:
   * 
   * *   **cve**: Linux software vulnerability
   * *   **sys**: Windows system vulnerability
   * 
   * This parameter is required.
   * 
   * @example
   * cve
   */
  type?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the vulnerability is detected. Separate multiple IDs with commas (,).
   * 
   * @example
   * vpc-uf6ssrvbrwe37ekw****,vpc-bp1aevy8sofi8mh1q****
   */
  vpcInstanceIds?: string;
  /**
   * @remarks
   * An array that consists of the names of vulnerabilities.
   * 
   * >  You can call the [DescribeGroupedVul](~~DescribeGroupedVul~~) operation to obtain the names of vulnerabilities.
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

