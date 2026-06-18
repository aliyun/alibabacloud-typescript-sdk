// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteScheduledPreloadExecutionRequest extends $dara.Model {
  /**
   * @remarks
   * The preload plan ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 665d3b48621bccf3fe29e1a7
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

