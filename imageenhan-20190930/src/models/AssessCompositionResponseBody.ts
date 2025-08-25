// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AssessCompositionResponseBodyData extends $dara.Model {
  /**
   * @example
   * 4.2551436
   */
  score?: number;
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssessCompositionResponseBody extends $dara.Model {
  data?: AssessCompositionResponseBodyData;
  /**
   * @example
   * CCAD9435-AEDB-49E4-BCCC-99B65ECC6693
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AssessCompositionResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

