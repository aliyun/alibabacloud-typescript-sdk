// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBrowserInstanceGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to send notification emails for authorization and deauthorization.
   * 
   * @example
   * true
   */
  authNotificationEnabled?: boolean;
  /**
   * @remarks
   * The browser configuration.
   */
  browserConfigShrink?: string;
  /**
   * @remarks
   * The ID of the cloud browser.
   * 
   * This parameter is required.
   * 
   * @example
   * big-0bz55ixxxxx9xi9w9
   */
  browserInstanceGroupId?: string;
  /**
   * @remarks
   * The name of the cloud browser.
   * 
   * @example
   * BrowserTest
   */
  cloudBrowserName?: string;
  /**
   * @remarks
   * The maximum resource count. This parameter takes effect only for the pay-as-you-go billing method based on monthly active users.
   * 
   * @example
   * 5
   */
  maxAmount?: number;
  /**
   * @remarks
   * The network configurations.
   */
  networkShrink?: string;
  /**
   * @remarks
   * The access policy.
   */
  policyShrink?: string;
  /**
   * @remarks
   * The storage-related policy.
   */
  storagePolicyShrink?: string;
  /**
   * @remarks
   * The timer.
   */
  timersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      authNotificationEnabled: 'AuthNotificationEnabled',
      browserConfigShrink: 'BrowserConfig',
      browserInstanceGroupId: 'BrowserInstanceGroupId',
      cloudBrowserName: 'CloudBrowserName',
      maxAmount: 'MaxAmount',
      networkShrink: 'Network',
      policyShrink: 'Policy',
      storagePolicyShrink: 'StoragePolicy',
      timersShrink: 'Timers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authNotificationEnabled: 'boolean',
      browserConfigShrink: 'string',
      browserInstanceGroupId: 'string',
      cloudBrowserName: 'string',
      maxAmount: 'number',
      networkShrink: 'string',
      policyShrink: 'string',
      storagePolicyShrink: 'string',
      timersShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

