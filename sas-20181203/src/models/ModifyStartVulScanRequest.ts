// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyStartVulScanRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Different requests should use different tokens. The token supports only ASCII characters and cannot exceed 64 characters in length.
   */
  clientToken?: string;
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * Settings for the types of vulnerabilities to detect by using the one-click scan feature. Valid values:
   * - **cve**: Linux software vulnerability.
   * - **sys**: Windows system vulnerability.
   * - **cms**: Web-CMS vulnerability.
   * - **app**: application vulnerability detected by the web scanner.
   * - **emg**: urgent vulnerability.
   * - **image**: container image vulnerability.
   * - **sca**: application vulnerability detected by software constituency parsing.
   * > If this parameter is left empty, all vulnerability types are detected.
   * 
   * @example
   * "cve,sys,cms,app,emg"
   */
  types?: string;
  /**
   * @remarks
   * The UUIDs of the servers. Separate multiple UUIDs with commas (,).
   * 
   * > You can call the [DescribeCloudCenterInstances](https://help.aliyun.com/document_detail/421726.html) operation to obtain this parameter.
   * 
   * @example
   * 1587bedb-fdb4-48c4-9330-****
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      types: 'Types',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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

