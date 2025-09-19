// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoginSwitchConfigsResponseBodyConfigList extends $dara.Model {
  /**
   * @remarks
   * The type of the alert that you enabled or disabled. Valid values:
   * 
   * *   **login_common_ip**: alerts for unapproved logon IP addresses
   * *   **login_common_time**: alerts for unapproved logon time ranges
   * *   **login_common_account**: alerts for unapproved logon accounts
   * 
   * @example
   * login_common_ip
   */
  item?: string;
  /**
   * @remarks
   * The status of the Log Service feature. Valid values:
   * 
   * *   **0**: The feature is disabled.
   * *   **1**: The feature is enabled.
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoginSwitchConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration item returned.
   */
  configList?: DescribeLoginSwitchConfigsResponseBodyConfigList[];
  /**
   * @remarks
   * The number of returned configuration items.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 0B48AB3C-84FC-424D-A01D-B9270EF4****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configList: 'ConfigList',
      count: 'Count',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configList: { 'type': 'array', 'itemType': DescribeLoginSwitchConfigsResponseBodyConfigList },
      count: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configList)) {
      $dara.Model.validateArray(this.configList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

