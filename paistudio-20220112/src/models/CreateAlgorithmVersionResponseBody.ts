// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlgorithmVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of the training algorithm.
   * 
   * @example
   * algo-xsldfvu1334
   */
  algorithmId?: string;
  /**
   * @remarks
   * Algorithm version.
   * 
   * @example
   * v0.0.1
   */
  algorithmVersion?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmId: 'AlgorithmId',
      algorithmVersion: 'AlgorithmVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmId: 'string',
      algorithmVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

