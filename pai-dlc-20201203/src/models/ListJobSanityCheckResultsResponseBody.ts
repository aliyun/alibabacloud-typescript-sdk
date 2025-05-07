// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SanityCheckResultItem } from "./SanityCheckResultItem";


export class ListJobSanityCheckResultsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AC9xxx-3xxx-5xxx2-xxxx-FA5
   */
  requestID?: string;
  /**
   * @remarks
   * The sanity check results.
   */
  sanityCheckResults?: SanityCheckResultItem[][];
  /**
   * @remarks
   * The total number of results that meet the filter conditions.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestID: 'RequestID',
      sanityCheckResults: 'SanityCheckResults',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestID: 'string',
      sanityCheckResults: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': SanityCheckResultItem } },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sanityCheckResults)) {
      $dara.Model.validateArray(this.sanityCheckResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

