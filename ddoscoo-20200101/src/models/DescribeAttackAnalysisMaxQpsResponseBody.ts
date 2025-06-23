// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAttackAnalysisMaxQpsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The peak queries per second (QPS) of DDoS attacks. Units: QPS.
   * 
   * @example
   * 41652
   */
  qps?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8DFB602D-1AAC-46C4-90F2-C84086E7A6E4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      qps: 'Qps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qps: 'number',
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

