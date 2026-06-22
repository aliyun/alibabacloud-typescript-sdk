// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCheckWarningsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * @example
   * 2546
   */
  checkId?: number;
  /**
   * @remarks
   * The type of the check item. Valid values:
   * 
   * - **hc.check.type.identity_auth**: identity authentication
   * - **hc.check.type.access_control**: access control
   * - **hc.check.type.network_service**: network and service
   * - **hc.check.type.service_conf**: service configuration
   * - **hc.check.type.file_rights**: file permission
   * - **hc.check.type.security_audit**: security audit
   * - **hc.check.type.attack_defense**: intrusion prevention
   * - **hc.check.type.others**: others.
   * 
   * @example
   * hc.check.type.attack_defense
   */
  checkType?: string;
  /**
   * @remarks
   * The container name.
   * 
   * @example
   * /redis
   */
  containerName?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: **1**, which indicates that the first page is returned.
   * 
   * @example
   * 1
   */
  currentPage?: number;
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
   * The number of check items to display on each page in a paged query. Default value: **20**, which indicates that 20 check items are displayed on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member accounts in the resource folder.
   * > You can invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 1232428423234****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The risk item ID. This parameter is required.
   * 
   * > To query check item information for a specified risk item and a specified server, you must provide the risk item ID. You can call the [DescribeCheckWarningSummary](~~DescribeCheckWarningSummary~~) operation to obtain this ID.
   * 
   * @example
   * 10354
   */
  riskId?: number;
  /**
   * @remarks
   * The risk detection status. Valid values:
   * 
   * - **1**: failed
   * - **2**: verifying
   * - **3**: passed
   * - **5**: expired
   * - **6**: ignored.
   * 
   * @example
   * 1
   */
  riskStatus?: number;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 1.2.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The ID of the server on which the baseline check is performed.
   * 
   * > To query check item information for a specified risk item and a specified server, you must provide the ID of the server on which the baseline check is performed. You can call the [DescribeWarningMachines](~~DescribeWarningMachines~~) operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * d42f938c-d962-48a0-90f9-05****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      checkType: 'CheckType',
      containerName: 'ContainerName',
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      riskId: 'RiskId',
      riskStatus: 'RiskStatus',
      sourceIp: 'SourceIp',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      checkType: 'string',
      containerName: 'string',
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      resourceDirectoryAccountId: 'number',
      riskId: 'number',
      riskStatus: 'number',
      sourceIp: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

