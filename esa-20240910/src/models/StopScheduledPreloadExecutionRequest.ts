// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopScheduledPreloadExecutionRequest extends $dara.Model {
  /**
   * @remarks
   * The prefetch plan ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 66599bd7397885b43804901c
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

