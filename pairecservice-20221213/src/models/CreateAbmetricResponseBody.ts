// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateABMetricResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  ABMetricId?: string;
  /**
   * @example
   * F7AC05FF-EDE7-5C2B-B9AE-33D6DF4178BA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ABMetricId: 'ABMetricId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ABMetricId: 'string',
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

