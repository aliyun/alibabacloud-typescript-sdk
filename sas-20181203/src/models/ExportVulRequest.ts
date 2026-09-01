// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportVulRequestVulEntityList extends $dara.Model {
  /**
   * @remarks
   * The name of the component.
   * 
   * @example
   * Ollama
   */
  entityName?: string;
  /**
   * @remarks
   * The version of the component.
   * 
   * @example
   * 1.0.0
   */
  entityVersion?: string;
  static names(): { [key: string]: string } {
    return {
      entityName: 'EntityName',
      entityVersion: 'EntityVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityName: 'string',
      entityVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportVulRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * @example
   * RHSA-2019:3197-Important: sudo security update
   */
  aliasName?: string;
  /**
   * @remarks
   * The asset type where the vulnerability is detected. Separate multiple types with commas (,). Valid values:
   * - **ECS**: host asset
   * - **CONTAINER**: container asset
   * 
   * @example
   * ECS
   */
  assetType?: string;
  /**
   * @remarks
   * The additional vulnerability type when querying application vulnerabilities. This parameter is required when Type is set to app. The value is fixed as **sca**.
   * 
   * > If this parameter is set to **sca**, both application vulnerabilities (**app** type) and software composition analysis (**sca** type) vulnerabilities are queried. If this parameter is not set, only application vulnerabilities are queried.
   * 
   * @example
   * sca
   */
  attachTypes?: string;
  /**
   * @remarks
   * The name of the container affected by the vulnerability.
   * 
   * @example
   * xxljob-7b87597b99-mcskr
   */
  containerName?: string;
  /**
   * @remarks
   * The end of the time range during which the first scan was performed.
   * > The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1696186800000
   */
  createTsEnd?: number;
  /**
   * @remarks
   * The start of the time range during which the first scan was performed.
   * > The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1696128144000
   */
  createTsStart?: number;
  /**
   * @remarks
   * The CVE ID.
   * 
   * @example
   * CVE-2022-44702
   */
  cveId?: string;
  /**
   * @remarks
   * Specifies whether the vulnerability is fixed. Valid values:
   * 
   * - **y**: fixed
   * - **n**: not fixed
   * 
   * @example
   * n
   */
  dealed?: string;
  /**
   * @remarks
   * The ID of the asset group to which the server with the vulnerability belongs.
   * > Call the [DescribeAllGroups](~~DescribeAllGroups~~) operation to obtain this parameter.
   * 
   * @example
   * 8834224
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the image affected by the vulnerability.
   * 
   * @example
   * container-***:****
   */
  imageName?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * - zh: Chinese
   * - en: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The priority of the vulnerability to query. Separate multiple priorities with commas (,). Valid values:
   * 
   * - **asap**: high
   * - **later**: medium
   * - **nntf**: low
   * 
   * @example
   * asap
   */
  necessity?: string;
  /**
   * @remarks
   * The path of the process affected by the vulnerability.
   * 
   * @example
   * /etc/test
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether runtime application self-protection (RASP) supports real-time protection against the vulnerability. Valid values:
   * 
   * - **0**: Not supported.
   * - **1**: Supported.
   * 
   * @example
   * 0
   */
  raspDefend?: number;
  /**
   * @remarks
   * The ID of the resource directory account.
   * 
   * @example
   * 1
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * Filters results by label. Valid values:
   * 
   * <props="china">
   * - Restart required
   * - Remote utilization
   * - EXP exists
   * - Exploitable
   * - Privilege escalation
   * - Code execution
   * 
   * 
   * <props="intl">
   * - **Restart required**
   * - **Remote utilization**
   * - **EXP exists**
   * - **Available**
   * - **Elevation of Privilege**
   * - **Code Execution**
   * 
   * @example
   * Restart required
   */
  searchTags?: string;
  /**
   * @remarks
   * The type of vulnerabilities to export. Valid values:
   * 
   * - **cve**: Linux software vulnerability
   * - **sys**: Windows system vulnerability
   * - **cms**: Web-CMS vulnerability
   * - **app**: application vulnerability
   * - **emg**: emergency vulnerability
   * 
   * This parameter is required.
   * 
   * @example
   * app
   */
  type?: string;
  /**
   * @remarks
   * The UUIDs of the servers to query for vulnerabilities. Separate multiple UUIDs with commas (,).
   * 
   * @example
   * 1587bedb-fdb4-48c4-9330-****
   */
  uuids?: string;
  /**
   * @remarks
   * The instance IDs of the VPC-connected instances to query for vulnerabilities. Separate multiple IDs with commas (,).
   * > Invoke the [DescribeVpcList](~~DescribeVpcList~~) operation to obtain this parameter.
   * 
   * @example
   * ins-133****,ins-5414****
   */
  vpcInstanceIds?: string;
  /**
   * @remarks
   * The list of vulnerability component information.
   */
  vulEntityList?: ExportVulRequestVulEntityList[];
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      assetType: 'AssetType',
      attachTypes: 'AttachTypes',
      containerName: 'ContainerName',
      createTsEnd: 'CreateTsEnd',
      createTsStart: 'CreateTsStart',
      cveId: 'CveId',
      dealed: 'Dealed',
      groupId: 'GroupId',
      imageName: 'ImageName',
      lang: 'Lang',
      necessity: 'Necessity',
      path: 'Path',
      raspDefend: 'RaspDefend',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      searchTags: 'SearchTags',
      type: 'Type',
      uuids: 'Uuids',
      vpcInstanceIds: 'VpcInstanceIds',
      vulEntityList: 'VulEntityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      assetType: 'string',
      attachTypes: 'string',
      containerName: 'string',
      createTsEnd: 'number',
      createTsStart: 'number',
      cveId: 'string',
      dealed: 'string',
      groupId: 'string',
      imageName: 'string',
      lang: 'string',
      necessity: 'string',
      path: 'string',
      raspDefend: 'number',
      resourceDirectoryAccountId: 'number',
      searchTags: 'string',
      type: 'string',
      uuids: 'string',
      vpcInstanceIds: 'string',
      vulEntityList: { 'type': 'array', 'itemType': ExportVulRequestVulEntityList },
    };
  }

  validate() {
    if(Array.isArray(this.vulEntityList)) {
      $dara.Model.validateArray(this.vulEntityList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

