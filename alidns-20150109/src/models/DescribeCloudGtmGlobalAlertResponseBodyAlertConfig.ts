// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudGtmGlobalAlertResponseBodyAlertConfigAlertConfig } from "./DescribeCloudGtmGlobalAlertResponseBodyAlertConfigAlertConfig";


export class DescribeCloudGtmGlobalAlertResponseBodyAlertConfig extends $dara.Model {
  alertConfig?: DescribeCloudGtmGlobalAlertResponseBodyAlertConfigAlertConfig[];
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: { 'type': 'array', 'itemType': DescribeCloudGtmGlobalAlertResponseBodyAlertConfigAlertConfig },
    };
  }

  validate() {
    if(Array.isArray(this.alertConfig)) {
      $dara.Model.validateArray(this.alertConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

