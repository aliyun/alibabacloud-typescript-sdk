// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAlgorithmResponseBody extends $dara.Model {
  /**
   * @remarks
   * The algorithm ID.
   * 
   * @example
   * algo-sidjc8134hv
   */
  algorithmId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E7C42CC7-2E85-508A-84F4-923B605FD10F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmId: 'AlgorithmId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmId: 'string',
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

