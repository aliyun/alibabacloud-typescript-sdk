// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRdsAnalysisResourceQuotasResponseBodyStorageTypeListStorageType } from "./DescribeRdsAnalysisResourceQuotasResponseBodyStorageTypeListStorageType";


export class DescribeRdsAnalysisResourceQuotasResponseBodyStorageTypeList extends $dara.Model {
  storageType?: DescribeRdsAnalysisResourceQuotasResponseBodyStorageTypeListStorageType[];
  static names(): { [key: string]: string } {
    return {
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      storageType: { 'type': 'array', 'itemType': DescribeRdsAnalysisResourceQuotasResponseBodyStorageTypeListStorageType },
    };
  }

  validate() {
    if(Array.isArray(this.storageType)) {
      $dara.Model.validateArray(this.storageType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

