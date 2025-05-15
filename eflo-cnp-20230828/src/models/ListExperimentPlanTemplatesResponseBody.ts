// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListExperimentPlanTemplatesResponseBodyData } from "./ListExperimentPlanTemplatesResponseBodyData";


export class ListExperimentPlanTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Data
   */
  data?: ListExperimentPlanTemplatesResponseBodyData[];
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * AAE4AFED-7AE6-52FA-80B6-448E63760552
   */
  requestId?: string;
  /**
   * @remarks
   * Total
   * 
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListExperimentPlanTemplatesResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

