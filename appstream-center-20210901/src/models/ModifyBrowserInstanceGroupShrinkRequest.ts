// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBrowserInstanceGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The browser settings.
   */
  browserConfigShrink?: string;
  /**
   * @remarks
   * The ID of the cloud browser to be modified.
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
  storagePolicyShrink?: string;
  /**
   * @remarks
   * The timer.
   */
  timersShrink?: string;
  static names(): { [key: string]: string } {
    return {
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

