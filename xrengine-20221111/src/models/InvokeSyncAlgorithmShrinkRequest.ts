// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeSyncAlgorithmShrinkRequest extends $dara.Model {
  jobId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  paramsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      name: 'Name',
      paramsShrink: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      name: 'string',
      paramsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

