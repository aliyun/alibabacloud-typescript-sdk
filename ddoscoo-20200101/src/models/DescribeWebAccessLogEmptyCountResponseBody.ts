// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebAccessLogEmptyCountResponseBody extends $dara.Model {
  availableCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableCount: 'AvailableCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableCount: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

