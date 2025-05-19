// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListExperimentsResponseBodyExperiments } from "./ListExperimentsResponseBodyExperiments";


export class ListExperimentsResponseBody extends $dara.Model {
  experiments?: ListExperimentsResponseBodyExperiments[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 68075085-1A7D-55C2-B51D-7AD9B02A6DD6
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      experiments: 'Experiments',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experiments: { 'type': 'array', 'itemType': ListExperimentsResponseBodyExperiments },
      requestId: 'string',
      totalCount: 'number',
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

