// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopJobRequestBody extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NONE
   */
  stopStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      stopStrategy: 'stopStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stopStrategy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

