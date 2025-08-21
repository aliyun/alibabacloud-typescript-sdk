// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDdosCreditResponseBodyDdosCredit extends $dara.Model {
  /**
   * @remarks
   * The time period after which blackhole filtering is automatically deactivated in the specified region. Unit: minutes.
   * 
   * @example
   * 150
   */
  blackholeTime?: number;
  /**
   * @remarks
   * The security credit score. The full score is **1000**.
   * 
   * @example
   * 550
   */
  score?: number;
  /**
   * @remarks
   * The security credit level. Valid values:
   * 
   * *   **A**: outstanding
   * *   **B**: excellent
   * *   **C**: good
   * *   **D**: average
   * *   **E**: poor
   * *   **F**: poorer
   * 
   * @example
   * D
   */
  scoreLevel?: string;
  static names(): { [key: string]: string } {
    return {
      blackholeTime: 'BlackholeTime',
      score: 'Score',
      scoreLevel: 'ScoreLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackholeTime: 'number',
      score: 'number',
      scoreLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosCreditResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the security credit score of the current Alibaba Cloud account in the specified region.
   */
  ddosCredit?: DescribeDdosCreditResponseBodyDdosCredit;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E1F7BD73-8E9D-58D9-8658-CFC97112C641
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      ddosCredit: 'DdosCredit',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosCredit: DescribeDdosCreditResponseBodyDdosCredit,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.ddosCredit && typeof (this.ddosCredit as any).validate === 'function') {
      (this.ddosCredit as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

