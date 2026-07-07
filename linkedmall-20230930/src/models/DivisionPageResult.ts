// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Division } from "./Division";


export class DivisionPageResult extends $dara.Model {
  /**
   * @remarks
   * Collection of regions
   */
  divisionList?: Division[];
  /**
   * @remarks
   * API request ID
   * 
   * @example
   * 841471F6-5D61-1331-8C38-2****B55
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      divisionList: 'divisionList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      divisionList: { 'type': 'array', 'itemType': Division },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.divisionList)) {
      $dara.Model.validateArray(this.divisionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

