// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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
   * The additional type of the vulnerabilities. You need to specify this parameter when you query application vulnerabilities. If you set the Type parameter to app, you must specify this parameter. Set the value to **sca**.
   * 
   * > If this parameter is set to **sca**, **application vulnerabilities** and the **vulnerabilities that are detected based on software component analysis** are queried. If you do not specify this parameter, only application vulnerabilities are queried.
   * 
   * @example
   * sca
   */
  attachTypes?: string;
  /**
   * @remarks
   * The name of the container that is affected by the vulnerability.
   * 
   * @example
   * xxljob-7b87597b99-mcskr
   */
  containerName?: string;
  /**
   * @remarks
   * The end time of the first scan.
   * 
   * >  This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1696186800000
   */
  createTsEnd?: number;
  /**
   * @remarks
   * The start time of the first scan.
   * 
   * >  This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1696128144000
   */
  createTsStart?: number;
  /**
   * @remarks
   * The Common Vulnerabilities and Exposures (CVE) ID of the vulnerability.
   * 
   * @example
   * CVE-2022-44702
   */
  cveId?: string;
  /**
   * @remarks
   * Specifies whether the vulnerability is fixed. Valid values:
   * 
   * *   **y**: The vulnerability is fixed.
   * *   **n**: The vulnerability is not fixed.
   * 
   * @example
   * n
   */
  dealed?: string;
  /**
   * @remarks
   * The server group ID of the server on which the vulnerabilities are detected.
   * 
   * > You can call the [DescribeAllGroups](~~DescribeAllGroups~~) operation to query the IDs of server groups.
   * 
   * @example
   * 8834224
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the image that is affected by the vulnerability.
   * 
   * @example
   * container-***:****
   */
  imageName?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The priority to fix the vulnerability. Separate multiple priorities with commas (,). Valid values:
   * 
   * *   **asap**: high
   * *   **later**: medium
   * *   **nntf**: low
   * 
   * @example
   * asap
   */
  necessity?: string;
  /**
   * @remarks
   * The path of the process that is affected by the vulnerability.
   * 
   * @example
   * /etc/test
   */
  path?: string;
  raspDefend?: number;
  /**
   * @remarks
   * The tag that is used to search for the vulnerabilities. Valid values:
   * 
   * *   Restart required
   * *   Remote exploitation
   * *   Exploit exists
   * *   Exploitable
   * *   Privilege escalation
   * *   Code execution
   * 
   * @example
   * Restart required
   */
  searchTags?: string;
  /**
   * @remarks
   * The type of the vulnerability that you want to export. Valid values:
   * 
   * *   **cve**: Linux software vulnerability
   * *   **sys**: Windows system vulnerability
   * *   **cms**: Web-CMS vulnerability
   * *   **app**: application vulnerability
   * *   **emg**: urgent vulnerability
   * 
   * This parameter is required.
   * 
   * @example
   * app
   */
  type?: string;
  /**
   * @remarks
   * The UUID of the server on which the vulnerabilities are detected. Separate multiple UUIDs with commas (,).
   * 
   * @example
   * 1587bedb-fdb4-48c4-9330-****
   */
  uuids?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the vulnerabilities are detected. Separate multiple IDs with commas (,).
   * 
   * > You can call the [DescribeVpcList](~~DescribeVpcList~~) operation to query the IDs of VPCs.
   * 
   * @example
   * ins-133****,ins-5414****
   */
  vpcInstanceIds?: string;
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
      searchTags: 'SearchTags',
      type: 'Type',
      uuids: 'Uuids',
      vpcInstanceIds: 'VpcInstanceIds',
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
      searchTags: 'string',
      type: 'string',
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

