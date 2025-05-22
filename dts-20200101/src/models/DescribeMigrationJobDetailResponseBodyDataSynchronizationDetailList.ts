// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMigrationJobDetailResponseBodyDataSynchronizationDetailListDataSynchronizationDetail } from "./DescribeMigrationJobDetailResponseBodyDataSynchronizationDetailListDataSynchronizationDetail";


export class DescribeMigrationJobDetailResponseBodyDataSynchronizationDetailList extends $dara.Model {
  dataSynchronizationDetail?: DescribeMigrationJobDetailResponseBodyDataSynchronizationDetailListDataSynchronizationDetail[];
  static names(): { [key: string]: string } {
    return {
      dataSynchronizationDetail: 'DataSynchronizationDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSynchronizationDetail: { 'type': 'array', 'itemType': DescribeMigrationJobDetailResponseBodyDataSynchronizationDetailListDataSynchronizationDetail },
    };
  }

  validate() {
    if(Array.isArray(this.dataSynchronizationDetail)) {
      $dara.Model.validateArray(this.dataSynchronizationDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

