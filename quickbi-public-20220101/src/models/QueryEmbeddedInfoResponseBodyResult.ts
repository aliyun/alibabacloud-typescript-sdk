// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryEmbeddedInfoResponseBodyResultDetail } from "./QueryEmbeddedInfoResponseBodyResultDetail";


export class QueryEmbeddedInfoResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Embed the statistics of the work.
   */
  detail?: QueryEmbeddedInfoResponseBodyResultDetail;
  /**
   * @remarks
   * The number of reports that are currently embedded.
   * 
   * @example
   * 3
   */
  embeddedCount?: number;
  /**
   * @remarks
   * The maximum number of reports that can be embedded.
   * 
   * @example
   * 100
   */
  maxCount?: number;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      embeddedCount: 'EmbeddedCount',
      maxCount: 'MaxCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: QueryEmbeddedInfoResponseBodyResultDetail,
      embeddedCount: 'number',
      maxCount: 'number',
    };
  }

  validate() {
    if(this.detail && typeof (this.detail as any).validate === 'function') {
      (this.detail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

