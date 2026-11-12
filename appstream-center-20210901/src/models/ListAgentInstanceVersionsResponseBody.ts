// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentInstanceVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of agent instance version numbers, which are deduplicated and sorted in ascending order.
   */
  data?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4C5A2E8F-9B3D-4E7A-A1C6-2F8D0E5B7A91
   */
  requestId?: string;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 2
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
      data: { 'type': 'array', 'itemType': 'string' },
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

