// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Experiment } from "./Experiment";


export class ListExperimentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of experiments.
   */
  experiments?: Experiment[];
  /**
   * @remarks
   * The pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * 0
   */
  nextPageToken?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0C6835C5-A424-5AFB-ACC2-F1E3CA1ABF7C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      experiments: 'Experiments',
      nextPageToken: 'NextPageToken',
      totalCount: 'TotalCount',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experiments: { 'type': 'array', 'itemType': Experiment },
      nextPageToken: 'number',
      totalCount: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.experiments)) {
      $dara.Model.validateArray(this.experiments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

