// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentlessTaskUsedSizeEstimateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The estimated scan volume of the detection task. Unit: GB.
   * 
   * @example
   * 1
   */
  estimateUsedSize?: number;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each API request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * CD380235-A0B8-540D-A0D5-D62884469E3C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      estimateUsedSize: 'EstimateUsedSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      estimateUsedSize: 'number',
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

