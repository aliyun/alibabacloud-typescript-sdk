// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlgorithmVersionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Algorithm configuration.
   */
  algorithmSpecShrink?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmSpecShrink: 'AlgorithmSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmSpecShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

