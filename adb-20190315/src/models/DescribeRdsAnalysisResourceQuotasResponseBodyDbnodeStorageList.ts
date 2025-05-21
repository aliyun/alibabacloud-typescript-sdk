// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeStorageListDBNodeStorage } from "./DescribeRdsAnalysisResourceQuotasResponseBodyDbnodeStorageListDbnodeStorage";


export class DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeStorageList extends $dara.Model {
  DBNodeStorage?: DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeStorageListDBNodeStorage[];
  static names(): { [key: string]: string } {
    return {
      DBNodeStorage: 'DBNodeStorage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeStorage: { 'type': 'array', 'itemType': DescribeRdsAnalysisResourceQuotasResponseBodyDBNodeStorageListDBNodeStorage },
    };
  }

  validate() {
    if(Array.isArray(this.DBNodeStorage)) {
      $dara.Model.validateArray(this.DBNodeStorage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

