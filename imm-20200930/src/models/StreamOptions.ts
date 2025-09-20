// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StreamOptions extends $dara.Model {
  incrementalOutput?: boolean;
  needReturnFinalResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      incrementalOutput: 'IncrementalOutput',
      needReturnFinalResult: 'NeedReturnFinalResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incrementalOutput: 'boolean',
      needReturnFinalResult: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

