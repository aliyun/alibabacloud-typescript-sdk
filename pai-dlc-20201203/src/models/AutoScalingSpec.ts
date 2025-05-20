// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AutoScalingSpec extends $dara.Model {
  scalingStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      scalingStrategy: 'ScalingStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scalingStrategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

