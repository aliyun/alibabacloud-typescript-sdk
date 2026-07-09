// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PausePipelineRequest extends $dara.Model {
  /**
   * @remarks
   * The reason for pausing the pipeline.
   * 
   * @example
   * manual maintenance
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

