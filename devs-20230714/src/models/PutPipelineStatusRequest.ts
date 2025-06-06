// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Pipeline } from "./Pipeline";


export class PutPipelineStatusRequest extends $dara.Model {
  body?: Pipeline;
  /**
   * @example
   * false
   */
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Pipeline,
      force: 'boolean',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

