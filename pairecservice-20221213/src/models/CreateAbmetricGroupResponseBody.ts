// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateABMetricGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  ABMetricGroupId?: string;
  /**
   * @example
   * E15A1443-7917-5BE0-AE70-25538ECF398D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ABMetricGroupId: 'ABMetricGroupId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ABMetricGroupId: 'string',
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

