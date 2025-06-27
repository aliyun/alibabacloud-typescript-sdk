// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNisInspectionTasksResponseBodyInspectionTaskList } from "./ListNisInspectionTasksResponseBodyInspectionTaskList";


export class ListNisInspectionTasksResponseBody extends $dara.Model {
  inspectionTaskList?: ListNisInspectionTasksResponseBodyInspectionTaskList[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * hKrS+MVXkuOgztXnvdml194Cz/lMNdmr+DEh0th6dVlNEo/F148UPCh2itDku7Qj
   */
  nextToken?: string;
  /**
   * @example
   * A7F0D6EC-E19E-58AC-AC9F-08036763960F
   */
  requestId?: string;
  /**
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      inspectionTaskList: 'InspectionTaskList',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inspectionTaskList: { 'type': 'array', 'itemType': ListNisInspectionTasksResponseBodyInspectionTaskList },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.inspectionTaskList)) {
      $dara.Model.validateArray(this.inspectionTaskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

