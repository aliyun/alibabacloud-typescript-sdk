// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudGtmGlobalAlertResponseBodyAlertConfig } from "./DescribeCloudGtmGlobalAlertResponseBodyAlertConfig";
import { DescribeCloudGtmGlobalAlertResponseBodyAlertGroup } from "./DescribeCloudGtmGlobalAlertResponseBodyAlertGroup";


export class DescribeCloudGtmGlobalAlertResponseBody extends $dara.Model {
  /**
   * @remarks
   * The alert configurations.
   */
  alertConfig?: DescribeCloudGtmGlobalAlertResponseBodyAlertConfig;
  /**
   * @remarks
   * The alert contact groups.
   */
  alertGroup?: DescribeCloudGtmGlobalAlertResponseBodyAlertGroup;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B57C121B-A45F-44D8-A9B2-13E5A5044195
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      alertGroup: 'AlertGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: DescribeCloudGtmGlobalAlertResponseBodyAlertConfig,
      alertGroup: DescribeCloudGtmGlobalAlertResponseBodyAlertGroup,
      requestId: 'string',
    };
  }

  validate() {
    if(this.alertConfig && typeof (this.alertConfig as any).validate === 'function') {
      (this.alertConfig as any).validate();
    }
    if(this.alertGroup && typeof (this.alertGroup as any).validate === 'function') {
      (this.alertGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

