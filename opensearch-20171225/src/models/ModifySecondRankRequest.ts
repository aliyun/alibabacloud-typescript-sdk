// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SecondRank } from "./SecondRank";


export class ModifySecondRankRequest extends $dara.Model {
  /**
   * @remarks
   * The request parameters.
   */
  body?: SecondRank;
  /**
   * @remarks
   * Specifies whether the request is a dry run.
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
      body: SecondRank,
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

