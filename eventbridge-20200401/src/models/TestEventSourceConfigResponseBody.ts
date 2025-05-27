// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TestEventSourceConfigResponseBodyData } from "./TestEventSourceConfigResponseBodyData";


export class TestEventSourceConfigResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: TestEventSourceConfigResponseBodyData[];
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * FF942675-F937-549C-A942-EB94FFE28DD3
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': TestEventSourceConfigResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

