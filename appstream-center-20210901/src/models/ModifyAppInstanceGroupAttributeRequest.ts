// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyAppInstanceGroupAttributeRequestNetwork } from "./ModifyAppInstanceGroupAttributeRequestNetwork";
import { ModifyAppInstanceGroupAttributeRequestNodePool } from "./ModifyAppInstanceGroupAttributeRequestNodePool";
import { ModifyAppInstanceGroupAttributeRequestSecurityPolicy } from "./ModifyAppInstanceGroupAttributeRequestSecurityPolicy";
import { ModifyAppInstanceGroupAttributeRequestStoragePolicy } from "./ModifyAppInstanceGroupAttributeRequestStoragePolicy";


export class ModifyAppInstanceGroupAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery group.
   * 
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The name of the delivery group.
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The network settings.
   * 
   * >  If you want to use this parameter, submit a ticket.
   */
  network?: ModifyAppInstanceGroupAttributeRequestNetwork;
  /**
   * @remarks
   * The information about the resource group.
   */
  nodePool?: ModifyAppInstanceGroupAttributeRequestNodePool;
  /**
   * @remarks
   * Specifies whether only one application can be opened in a session.
   * 
   * *   After you enable this feature, the system assigns a session to each application if you open multiple applications in a delivery group. This consumes a larger number of sessions.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  perSessionPerApp?: boolean;
  /**
   * @remarks
   * The application ID of the pre-open application. If you set `PreOpenMode` to `SINGLE_APP`, you cannot leave this parameter empty.``
   * 
   * @example
   * ca-b2ronxxd****
   */
  preOpenAppId?: string;
  /**
   * @remarks
   * The pre-open mode.
   * 
   * Valid values:
   * 
   * *   SINGLE_APP: enables the pre-open mode for a single application.
   * *   OFF: disables the pre-open mode. This is the default value.
   * 
   * @example
   * OFF
   */
  preOpenMode?: string;
  /**
   * @remarks
   * The product type.
   * 
   * Valid value:
   * 
   * *   CloudApp: App Streaming
   * 
   * This parameter is required.
   * 
   * @example
   * CloudApp
   */
  productType?: string;
  /**
   * @remarks
   * The security policy.
   */
  securityPolicy?: ModifyAppInstanceGroupAttributeRequestSecurityPolicy;
  /**
   * @remarks
   * The duration for which sessions are retained after disconnection. Unit: minutes. After an end user disconnects from a session, the session is closed only after the specified duration elapses. If you want to permanently retain sessions, set this parameter to `-1`. Valid values:-1 and 3 to 300. Default value: `15`.
   * 
   * @example
   * 15
   */
  sessionTimeout?: number;
  /**
   * @remarks
   * The storage policy.
   */
  storagePolicy?: ModifyAppInstanceGroupAttributeRequestStoragePolicy;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupName: 'AppInstanceGroupName',
      network: 'Network',
      nodePool: 'NodePool',
      perSessionPerApp: 'PerSessionPerApp',
      preOpenAppId: 'PreOpenAppId',
      preOpenMode: 'PreOpenMode',
      productType: 'ProductType',
      securityPolicy: 'SecurityPolicy',
      sessionTimeout: 'SessionTimeout',
      storagePolicy: 'StoragePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceGroupName: 'string',
      network: ModifyAppInstanceGroupAttributeRequestNetwork,
      nodePool: ModifyAppInstanceGroupAttributeRequestNodePool,
      perSessionPerApp: 'boolean',
      preOpenAppId: 'string',
      preOpenMode: 'string',
      productType: 'string',
      securityPolicy: ModifyAppInstanceGroupAttributeRequestSecurityPolicy,
      sessionTimeout: 'number',
      storagePolicy: ModifyAppInstanceGroupAttributeRequestStoragePolicy,
    };
  }

  validate() {
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    if(this.nodePool && typeof (this.nodePool as any).validate === 'function') {
      (this.nodePool as any).validate();
    }
    if(this.securityPolicy && typeof (this.securityPolicy as any).validate === 'function') {
      (this.securityPolicy as any).validate();
    }
    if(this.storagePolicy && typeof (this.storagePolicy as any).validate === 'function') {
      (this.storagePolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

