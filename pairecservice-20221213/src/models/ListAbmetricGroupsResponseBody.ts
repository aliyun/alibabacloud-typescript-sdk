// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListABMetricGroupsResponseBodyABMetricGroups } from "./ListAbmetricGroupsResponseBodyAbmetricGroups";


export class ListABMetricGroupsResponseBody extends $dara.Model {
  ABMetricGroups?: ListABMetricGroupsResponseBodyABMetricGroups[];
  /**
   * @example
   * E15A1443-7917-5BE0-AE70-25538ECF398D
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ABMetricGroups: 'ABMetricGroups',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ABMetricGroups: { 'type': 'array', 'itemType': ListABMetricGroupsResponseBodyABMetricGroups },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ABMetricGroups)) {
      $dara.Model.validateArray(this.ABMetricGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

