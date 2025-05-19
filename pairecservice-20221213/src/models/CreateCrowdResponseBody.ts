// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCrowdResponseBody extends $dara.Model {
  /**
   * @example
   * 3
   */
  crowdId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 59CE7EC6-F268-5D71-9215-32922CC50D72
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      crowdId: 'CrowdId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crowdId: 'string',
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

