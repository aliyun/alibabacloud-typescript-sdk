// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppInstanceGroupAttributeShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The delivery group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * aig-9ciijz60n4xsv****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The delivery group name.
   * 
   * @example
   * 办公应用
   */
  appInstanceGroupName?: string;
  /**
   * @remarks
   * The network configuration.
   * 
   * > To use this parameter, submit a ticket.
   */
  networkShrink?: string;
  /**
   * @remarks
   * The resource group object.
   */
  nodePoolShrink?: string;
  /**
   * @remarks
   * Specifies whether to allow only one application per session.
   * - If enabled, opening multiple applications within a delivery group allocates a separate session for each application, consuming more sessions.
   * 
   * @example
   * false
   */
  perSessionPerApp?: boolean;
  /**
   * @remarks
   * The AppId of the pre-open application. If the PreOpenMode parameter is set to `SINGLE_APP`, PreOpenAppId cannot be an empty string.
   * 
   * @example
   * ca-b2ronxxd****
   */
  preOpenAppId?: string;
  /**
   * @remarks
   * The pre-open mode.
   * 
   * @example
   * OFF
   */
  preOpenMode?: string;
  /**
   * @remarks
   * The product type.
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
   * The session retention duration after disconnection, in minutes. After an end user session is disconnected, the session is retained for the specified duration before being logged off. Set this parameter to `-1` to retain the session indefinitely. Valid values: -1 and 3 to 300. Default value: `15`.
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

