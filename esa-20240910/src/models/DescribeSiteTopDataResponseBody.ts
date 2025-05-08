// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSiteTopDataResponseBodyData } from "./DescribeSiteTopDataResponseBodyData";


export class DescribeSiteTopDataResponseBody extends $dara.Model {
  data?: DescribeSiteTopDataResponseBodyData[];
  /**
   * @example
   * 2023-04-09T16:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 35C66C7B-671H-4297-9187-2C447724****
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  samplingRate?: number;
  /**
   * @example
   * 2023-04-08T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      endTime: 'EndTime',
      requestId: 'RequestId',
      samplingRate: 'SamplingRate',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeSiteTopDataResponseBodyData },
      endTime: 'string',
      requestId: 'string',
      samplingRate: 'number',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

