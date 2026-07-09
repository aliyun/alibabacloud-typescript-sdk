// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TerminatePipelineRequest extends $dara.Model {
  /**
   * @example
   * project deprecated
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

