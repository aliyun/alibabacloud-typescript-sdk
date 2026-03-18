// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRdStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the current account.
   * 
   * @example
   * 125085778340****
   */
  currentUid?: string;
  /**
   * @remarks
   * The type of the Alibaba Cloud account. Valid values:
   * 
   * *   **MasterAccount**: management account.
   * *   **DelegatedAdminAccount**: delegated administrator account.
   * *   **MemberAccount**: member.
   * 
   * @example
   * MemberAccount
   */
  currentUidType?: string;
  /**
   * @remarks
   * Indicates whether the multi-account management feature is enabled for Anti-DDoS Origin.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * Indicates whether the multi-account management feature is enabled for the current account in Anti-DDoS Origin.
   * 
   * @example
   * false
   */
  localEnable?: boolean;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the management account in the resource directory.
   * 
   * @example
   * 125085778340****
   */
  masterUid?: string;
  /**
   * @remarks
   * Indicates whether Resource Directory is enabled in the [Resource Management console](https://resourcemanager.console.aliyun.com).
   * 
   * @example
   * false
   */
  remoteEnable?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1B0F7EC6-51D7-4D70-B0EC-CD8A9E998D86
   */
  requestId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the management account for which the multi-account management feature is enabled in Anti-DDoS Origin.
   * 
   * @example
   * 125085778340****
   */
  rootUid?: string;
  /**
   * @remarks
   * Indicates whether the trusted service is enabled.
   * 
   * @example
   * false
   */
  servicePrincipalEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      currentUid: 'CurrentUid',
      currentUidType: 'CurrentUidType',
      enabled: 'Enabled',
      localEnable: 'LocalEnable',
      masterUid: 'MasterUid',
      remoteEnable: 'RemoteEnable',
      requestId: 'RequestId',
      rootUid: 'RootUid',
      servicePrincipalEnabled: 'ServicePrincipalEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentUid: 'string',
      currentUidType: 'string',
      enabled: 'boolean',
      localEnable: 'boolean',
      masterUid: 'string',
      remoteEnable: 'boolean',
      requestId: 'string',
      rootUid: 'string',
      servicePrincipalEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

