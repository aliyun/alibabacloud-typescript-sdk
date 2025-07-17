// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNotificationPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable simple mode.
   * 
   * @example
   * true
   */
  directedMode?: boolean;
  /**
   * @remarks
   * The ID of the notification policy.
   * 
   * @example
   * 12345
   */
  ids?: string;
  /**
   * @remarks
   * Specifies whether to query the details about notification policies. Valid values:
   * 
   * *   `true`: Details about notification policies are queried.
   * *   `false`: Details about notification policies are not queried.
   * 
   * @example
   * false
   */
  isDetail?: boolean;
  /**
   * @remarks
   * The name of the notification policy.
   * 
   * @example
   * notificationpolicy_test
   */
  name?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The ID of the region. Default value: **cn-hangzhou**.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      directedMode: 'DirectedMode',
      ids: 'Ids',
      isDetail: 'IsDetail',
      name: 'Name',
      page: 'Page',
      regionId: 'RegionId',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directedMode: 'boolean',
      ids: 'string',
      isDetail: 'boolean',
      name: 'string',
      page: 'number',
      regionId: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

