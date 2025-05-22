// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMigrationJobDetailResponseBodyDataInitializationDetailListDataInitializationDetail } from "./DescribeMigrationJobDetailResponseBodyDataInitializationDetailListDataInitializationDetail";


export class DescribeMigrationJobDetailResponseBodyDataInitializationDetailList extends $dara.Model {
  dataInitializationDetail?: DescribeMigrationJobDetailResponseBodyDataInitializationDetailListDataInitializationDetail[];
  static names(): { [key: string]: string } {
    return {
      dataInitializationDetail: 'DataInitializationDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInitializationDetail: { 'type': 'array', 'itemType': DescribeMigrationJobDetailResponseBodyDataInitializationDetailListDataInitializationDetail },
    };
  }

  validate() {
    if(Array.isArray(this.dataInitializationDetail)) {
      $dara.Model.validateArray(this.dataInitializationDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

