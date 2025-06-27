// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudGtmInstanceConfigAlertResponseBodyAlertGroup extends $dara.Model {
  alertGroup?: string[];
  static names(): { [key: string]: string } {
    return {
      alertGroup: 'AlertGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertGroup: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.alertGroup)) {
      $dara.Model.validateArray(this.alertGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

