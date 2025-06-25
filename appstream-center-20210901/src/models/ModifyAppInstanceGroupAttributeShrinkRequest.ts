// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppInstanceGroupAttributeShrinkRequest extends $dara.Model {
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
  networkShrink?: string;
  /**
   * @remarks
   * The information about the resource group.
   */
  nodePoolShrink?: string;
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
  securityPolicyShrink?: string;
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
  storagePolicyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupName: 'AppInstanceGroupName',
      networkShrink: 'Network',
      nodePoolShrink: 'NodePool',
      perSessionPerApp: 'PerSessionPerApp',
      preOpenAppId: 'PreOpenAppId',
      preOpenMode: 'PreOpenMode',
      productType: 'ProductType',
      securityPolicyShrink: 'SecurityPolicy',
      sessionTimeout: 'SessionTimeout',
      storagePolicyShrink: 'StoragePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceGroupName: 'string',
      networkShrink: 'string',
      nodePoolShrink: 'string',
      perSessionPerApp: 'boolean',
      preOpenAppId: 'string',
      preOpenMode: 'string',
      productType: 'string',
      securityPolicyShrink: 'string',
      sessionTimeout: 'number',
      storagePolicyShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

