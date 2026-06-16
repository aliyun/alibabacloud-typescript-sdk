// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentRuntimeEndpointsInput extends $dara.Model {
  /**
   * @remarks
   * Filter by endpoint name
   */
  endpointName?: string;
  /**
   * @remarks
   * Page number
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of records per page
   */
  pageSize?: number;
  /**
   * @remarks
   * Filter by status
   */
  statuses?: string[];
  static names(): { [key: string]: string } {
    return {
      endpointName: 'endpointName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      statuses: 'statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      statuses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

