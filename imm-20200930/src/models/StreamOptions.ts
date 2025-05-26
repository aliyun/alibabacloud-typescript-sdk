// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StreamOptions extends $dara.Model {
  incrementalOutput?: boolean;
  static names(): { [key: string]: string } {
    return {
      incrementalOutput: 'IncrementalOutput',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incrementalOutput: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

