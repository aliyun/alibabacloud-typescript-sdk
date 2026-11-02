// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelinesRequest extends $dara.Model {
  /**
   * @remarks
   * The pipeline type.
   * 
   * @example
   * Standard
   */
  speed?: string;
  static names(): { [key: string]: string } {
    return {
      speed: 'Speed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      speed: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

