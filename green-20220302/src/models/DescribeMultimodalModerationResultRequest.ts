// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMultimodalModerationResultRequest extends $dara.Model {
  /**
   * @example
   * AAAAA-BBBBB-AIXI-1314-CCCCC
   */
  reqId?: string;
  static names(): { [key: string]: string } {
    return {
      reqId: 'ReqId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reqId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

