// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudGtmInstanceConfigAlertResponseBodyAlertConfigAlertConfig } from "./DescribeCloudGtmInstanceConfigAlertResponseBodyAlertConfigAlertConfig";


export class DescribeCloudGtmInstanceConfigAlertResponseBodyAlertConfig extends $dara.Model {
  alertConfig?: DescribeCloudGtmInstanceConfigAlertResponseBodyAlertConfigAlertConfig[];
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: { 'type': 'array', 'itemType': DescribeCloudGtmInstanceConfigAlertResponseBodyAlertConfigAlertConfig },
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

