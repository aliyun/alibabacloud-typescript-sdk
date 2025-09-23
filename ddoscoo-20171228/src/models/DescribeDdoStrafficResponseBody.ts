// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDoSTrafficResponseBodyDDoSTrafficPoints extends $dara.Model {
  /**
   * @example
   * 129867
   */
  defenseMaxInBps?: number;
  /**
   * @example
   * 129867
   */
  sourceMaxInBps?: number;
  /**
   * @example
   * 234082304
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      defenseMaxInBps: 'DefenseMaxInBps',
      sourceMaxInBps: 'SourceMaxInBps',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defenseMaxInBps: 'number',
      sourceMaxInBps: 'number',
      time: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDDoSTrafficResponseBody extends $dara.Model {
  DDoSTrafficPoints?: DescribeDDoSTrafficResponseBodyDDoSTrafficPoints[];
  /**
   * @example
   * 23482234
   */
  defenseInBytes?: number;
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  /**
   * @example
   * 19284762
   */
  sourceInBytes?: number;
  static names(): { [key: string]: string } {
    return {
      DDoSTrafficPoints: 'DDoSTrafficPoints',
      defenseInBytes: 'DefenseInBytes',
      requestId: 'RequestId',
      sourceInBytes: 'SourceInBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DDoSTrafficPoints: { 'type': 'array', 'itemType': DescribeDDoSTrafficResponseBodyDDoSTrafficPoints },
      defenseInBytes: 'number',
      requestId: 'string',
      sourceInBytes: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.DDoSTrafficPoints)) {
      $dara.Model.validateArray(this.DDoSTrafficPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

