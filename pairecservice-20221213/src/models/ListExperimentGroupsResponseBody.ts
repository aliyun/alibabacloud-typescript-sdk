// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListExperimentGroupsResponseBodyExperimentGroups } from "./ListExperimentGroupsResponseBodyExperimentGroups";


export class ListExperimentGroupsResponseBody extends $dara.Model {
  experimentGroups?: ListExperimentGroupsResponseBodyExperimentGroups[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 59CE7EC6-F268-5D71-9215-32922CC50D72
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      experimentGroups: 'ExperimentGroups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentGroups: { 'type': 'array', 'itemType': ListExperimentGroupsResponseBodyExperimentGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.experimentGroups)) {
      $dara.Model.validateArray(this.experimentGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

