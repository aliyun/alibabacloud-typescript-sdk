// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContactResponseBodyDatapoints } from "./DescribeContactResponseBodyDatapoints";


export class DescribeContactResponseBody extends $dara.Model {
  code?: number;
  datapoints?: DescribeContactResponseBodyDatapoints;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      datapoints: 'Datapoints',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      datapoints: DescribeContactResponseBodyDatapoints,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.datapoints && typeof (this.datapoints as any).validate === 'function') {
      (this.datapoints as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

