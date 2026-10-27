// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyStartVulScanRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You must use different tokens for different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04115b
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request. Valid values:
   * - true: performs a dry run only. The system checks the request but does not perform the actual operation.
   * - false: performs the request.
   * Default value: false.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the main account of the member accounts in the resource folder.
   * > You can invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 1234567890123456
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * Settings for the vulnerability types to be detected by the quick scan feature. Valid values:
   * - **cve**: Linux software vulnerability.
   * - **sys**: Windows system vulnerability.
   * - **cms**: Web-CMS vulnerability.
   * - **app**: Application vulnerabilities detected by web scanners.
   * - **emg**: Emergency vulnerabilities.
   * - **image**: Container image vulnerabilities.
   * - **sca**: Application vulnerabilities detected by software constituency parsing.
   * > If this parameter is left empty, all vulnerability types are detected.
   * 
   * @example
   * "cve,sys,cms,app,emg"
   */
  types?: string;
  /**
   * @remarks
   * The list of server UUIDs. Separate multiple UUIDs with commas (,).
   * 
   * 
   * > You can call the [DescribeCloudCenterInstances](https://help.aliyun.com/document_detail/421726.html) operation to obtain the UUIDs.
   * 
   * @example
   * 1587bedb-fdb4-48c4-9330-****
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      types: 'Types',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      resourceDirectoryAccountId: 'number',
      types: 'string',
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

