// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBrowserInstanceGroupShrinkRequest extends $dara.Model {
  browserConfigShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * big-0bz55ixxxxx9xi9w9
   */
  browserInstanceGroupId?: string;
  /**
   * @example
   * BrowserTest
   */
  cloudBrowserName?: string;
  networkShrink?: string;
  policyShrink?: string;
  timersShrink?: string;
  static names(): { [key: string]: string } {
    return {
      browserConfigShrink: 'BrowserConfig',
      browserInstanceGroupId: 'BrowserInstanceGroupId',
      cloudBrowserName: 'CloudBrowserName',
      networkShrink: 'Network',
      policyShrink: 'Policy',
      timersShrink: 'Timers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browserConfigShrink: 'string',
      browserInstanceGroupId: 'string',
      cloudBrowserName: 'string',
      networkShrink: 'string',
      policyShrink: 'string',
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

