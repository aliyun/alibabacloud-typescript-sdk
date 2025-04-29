// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDatasetItemInfoResponseBodyDatasetItemInfo } from "./DescribeDatasetItemInfoResponseBodyDatasetItemInfo";


export class DescribeDatasetItemInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Dataset information.
   */
  datasetItemInfo?: DescribeDatasetItemInfoResponseBodyDatasetItemInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5BAFA85F-38E3-5D9E-9E32-4B09********
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetItemInfo: 'DatasetItemInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetItemInfo: DescribeDatasetItemInfoResponseBodyDatasetItemInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.datasetItemInfo && typeof (this.datasetItemInfo as any).validate === 'function') {
      (this.datasetItemInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

