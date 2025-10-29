// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ReadPageScrapeBody } from "./ReadPageScrapeBody";


export class ReadPageScrapeRequest extends $dara.Model {
  /**
   * @remarks
   * post body
   */
  body?: ReadPageScrapeBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ReadPageScrapeBody,
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

