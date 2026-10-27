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
   * The asset type where the vulnerability resides. Separate multiple types with commas (,). Valid values:
   * - **ECS**: server asset
   * - **CONTAINER**: container asset
   * 
   * @example
   * ECS
   */
  assetType?: string;
  /**
   * @remarks
   * The additional vulnerability type when you query application vulnerabilities. You must configure this parameter when you query application vulnerabilities, which means the Type parameter is set to app. Set the value to **sca**.
   * 
   * > If you set this parameter to **sca**, you can query application vulnerabilities (type **app**) and software composition analysis (type **sca**) vulnerabilities. If you do not set this parameter, only application vulnerabilities are queried.
   * 
   * @example
   * sca
   */
  attachTypes?: string;
  /**
   * @remarks
   * The name of the container affected by the vulnerabilities to be queried.
   * 
   * @example
   * xxljob-7b87597b99-mcskr
   */
  containerName?: string;
  /**
   * @remarks
   * The end time of the first scan.
   * > The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1696186800000
   */
  createTsEnd?: number;
  /**
   * @remarks
   * The start time of the first scan.
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
   * Specifies whether the vulnerabilities to be queried are fixed. Valid values:
   * 
   * - **y**: fixed
   * - **n**: unfixed
   * 
   * @example
   * n
   */
  dealed?: string;
  /**
   * @remarks
   * The ID of the asset group to which the servers affected by the vulnerabilities to be queried belong.
   * > You can call the [DescribeAllGroups](~~DescribeAllGroups~~) operation to obtain the value of this parameter.
   * 
   * @example
   * 8834224
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the image affected by the vulnerabilities to be queried.
   * 
   * @example
   * container-***:****
   */
  imageName?: string;
  /**
   * @remarks
   * Specifies the language of the request and response. Default value: **zh**. Valid values:
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
   * The priorities of the vulnerabilities to be queried. Separate multiple priorities with commas (,). Valid values:
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
   * The path of the process affected by the vulnerabilities to be queried.
   * 
   * @example
   * /etc/test
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether Runtime Application Self-Protection (RASP) supports real-time protection against the vulnerability. Valid values:
   * 
   * - **0**: not supported
   * - **1**: supported
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
   * The tags used for filtering. Valid values:
   * 
   * <props="china">
   * - Restart required
   * - Remote exploitation
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
   * - **Elevation of privilege**
   * - **Code execution**
   * 
   * @example
   * Restart required
   */
  searchTags?: string;
  /**
   * @remarks
   * The type of the vulnerabilities to be exported. Valid values:
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
   * The UUIDs of the servers on which you want to query vulnerabilities. Separate multiple UUIDs with commas (,).
   * 
   * @example
   * 1587bedb-fdb4-48c4-9330-****
   */
  uuids?: string;
  /**
   * @remarks
   * The IDs of the VPC-connected instances where the vulnerabilities to be queried reside. Separate multiple IDs with commas (,).
   * > You can call the [DescribeVpcList](~~DescribeVpcList~~) operation to obtain the value of this parameter.
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

