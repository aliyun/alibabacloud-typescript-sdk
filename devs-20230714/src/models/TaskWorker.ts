// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TaskWorker extends $dara.Model {
  /**
   * @example
   * serverless-runner
   */
  presetWorker?: string;
  static names(): { [key: string]: string } {
    return {
      presetWorker: 'presetWorker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      presetWorker: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

