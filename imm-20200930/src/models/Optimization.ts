// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Optimization extends $dara.Model {
  /**
   * @example
   * 0.01
   */
  learningRate?: number;
  /**
   * @example
   * SGD
   */
  optimizer?: string;
  static names(): { [key: string]: string } {
    return {
      learningRate: 'LearningRate',
      optimizer: 'Optimizer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      learningRate: 'number',
      optimizer: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

