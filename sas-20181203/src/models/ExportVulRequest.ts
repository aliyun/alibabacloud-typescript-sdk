// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportVulRequestVulEntityList extends $dara.Model {
  /**
   * @remarks
   * The component name.
   * 
   * @example
   * Ollama
   */
  entityName?: string;
  /**
   * @remarks
   * The component version.
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
   * The vulnerability name.
   * 
   * @example
   * RHSA-2019:3197-Important: sudo security update
   */
  aliasName?: string;
  /**
   * @remarks
   * An additional vulnerability type to export. This parameter is required and must be set to **sca** if the `Type` parameter is set to `app`.
   * 
   * > If you set this parameter to **sca**, the query returns both application vulnerabilities (**app**) and software composition analysis (**sca**) vulnerabilities. If you do not set this parameter, only application vulnerabilities are returned.
   * 
   * @example
   * sca
   */
  attachTypes?: string;
  /**
   * @remarks
   * The affected container name.
   * 
   * @example
   * xxljob-7b87597b99-mcskr
   */
  containerName?: string;
  /**
   * @remarks
   * The end of the creation time range for the vulnerabilities to export.
   * 
   * > A Unix timestamp in milliseconds.
   * 
   * @example
   * 1696186800000
   */
  createTsEnd?: number;
  /**
   * @remarks
   * The start of the creation time range for the vulnerabilities to export.
   * 
   * > A Unix timestamp in milliseconds.
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
   * Indicates whether the vulnerability is remediated. Valid values:
   * 
   * - **y**: Remediated
   * 
   * - **n**: Not remediated
   * 
   * @example
   * n
   */
  dealed?: string;
  /**
   * @remarks
   * The ID of the asset group that contains the affected servers.
   * 
   * > You can call the [DescribeAllGroups](~~DescribeAllGroups~~) operation to obtain this parameter.
   * 
   * @example
   * 8834224
   */
  groupId?: string;
  /**
   * @remarks
   * The affected image name.
   * 
   * @example
   * container-***:****
   */
  imageName?: string;
  /**
   * @remarks
   * The language of the request and response. The default value is **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The remediation priority of the vulnerabilities to export. Separate multiple priorities with commas. Valid values:
   * 
   * - **asap**: High
   * 
   * - **later**: Medium
   * 
   * - **nntf**: Low
   * 
   * @example
   * asap
   */
  necessity?: string;
  /**
   * @remarks
   * The affected process path.
   * 
   * @example
   * /etc/test
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether the vulnerability is protected by runtime application self-protection (RASP). Valid values:
   * 
   * - **0**: Not supported
   * 
   * - **1**: Supported
   * 
   * @example
   * 0
   */
  raspDefend?: number;
  /**
   * @example
   * 1
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * A tag for filtering vulnerabilities. Separate multiple tags with commas. Valid values:
   * 
   * <props="china">
   * 
   * - Restart required
   * 
   * - remote exploitation
   * 
   * - exploit exists
   * 
   * - exploitable
   * 
   * - Elevation of Privilege
   * 
   * - Code Execution
   * 
   * 
   * 
   * <props="intl">
   * 
   * - **Restart required**
   * 
   * - **remote exploitation**
   * 
   * - **exploit exists**
   * 
   * - **exploitable**
   * 
   * - **Elevation of Privilege**
   * 
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
   * 
   * - **sys**: Windows system vulnerability
   * 
   * - **cms**: Web-CMS vulnerability
   * 
   * - **app**: application vulnerability
   * 
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
   * The UUIDs of the servers for which to export vulnerabilities. Separate multiple UUIDs with commas.
   * 
   * @example
   * 1587bedb-fdb4-48c4-9330-****
   */
  uuids?: string;
  /**
   * @remarks
   * The IDs of the VPC instances for which to export vulnerabilities. Separate multiple IDs with commas.
   * 
   * > You can call the [DescribeVpcList](~~DescribeVpcList~~) operation to obtain this parameter.
   * 
   * @example
   * ins-133****,ins-5414****
   */
  vpcInstanceIds?: string;
  /**
   * @remarks
   * A list of vulnerability component information.
   */
  vulEntityList?: ExportVulRequestVulEntityList[];
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
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

