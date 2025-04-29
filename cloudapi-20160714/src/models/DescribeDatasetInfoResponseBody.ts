// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDatasetInfoResponseBodyDatasetInfo } from "./DescribeDatasetInfoResponseBodyDatasetInfo";


export class DescribeDatasetInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The dataset info.
   */
  datasetInfo?: DescribeDatasetInfoResponseBodyDatasetInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A2C8F75E-EE84-5C64-960F-45C8********
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetInfo: 'DatasetInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetInfo: DescribeDatasetInfoResponseBodyDatasetInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.datasetInfo && typeof (this.datasetInfo as any).validate === 'function') {
      (this.datasetInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

