// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartRayClusterRequest extends $dara.Model {
  /**
   * @example
   * c533e141-bf99-4236-8b6b-30e133db113c
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

