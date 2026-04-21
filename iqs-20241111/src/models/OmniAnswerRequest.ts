// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OmniSearchQuery } from "./OmniSearchQuery";


export class OmniAnswerRequest extends $dara.Model {
  body?: OmniSearchQuery;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: OmniSearchQuery,
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

