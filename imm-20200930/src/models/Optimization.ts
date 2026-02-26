// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Optimization extends $dara.Model {
  /**
   * @remarks
   * The initial learning rate.
   * 
   * @example
   * 0.01
   */
  learningRate?: number;
  /**
   * @remarks
   * The optimization method.
   * 
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

