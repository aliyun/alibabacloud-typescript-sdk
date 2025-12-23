// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FirstRank } from "./FirstRank";


export class CreateFirstRankRequest extends $dara.Model {
  /**
   * @remarks
   * The request body that contains the parameters of the rough sort expression.
   */
  body?: FirstRank;
  /**
   * @remarks
   * Specifies whether to perform a dry run.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: FirstRank,
      dryRun: 'boolean',
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

