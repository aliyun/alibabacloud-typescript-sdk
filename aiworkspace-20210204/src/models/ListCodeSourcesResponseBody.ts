// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CodeSourceItem } from "./CodeSourceItem";


export class ListCodeSourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code sources.
   */
  codeSources?: CodeSourceItem[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of code sources that meet the filter conditions.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      codeSources: 'CodeSources',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeSources: { 'type': 'array', 'itemType': CodeSourceItem },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.codeSources)) {
      $dara.Model.validateArray(this.codeSources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

