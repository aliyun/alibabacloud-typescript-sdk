// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProjectFullVerifyResultResponseBodyDataFullVerifyTableStatistics } from "./ListProjectFullVerifyResultResponseBodyDataFullVerifyTableStatistics";


export class ListProjectFullVerifyResultResponseBodyData extends $dara.Model {
  /**
   * @example
   * 11
   */
  differentNumber?: number;
  fullVerifyTableStatistics?: ListProjectFullVerifyResultResponseBodyDataFullVerifyTableStatistics[];
  static names(): { [key: string]: string } {
    return {
      differentNumber: 'DifferentNumber',
      fullVerifyTableStatistics: 'FullVerifyTableStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      differentNumber: 'number',
      fullVerifyTableStatistics: { 'type': 'array', 'itemType': ListProjectFullVerifyResultResponseBodyDataFullVerifyTableStatistics },
    };
  }

  validate() {
    if(Array.isArray(this.fullVerifyTableStatistics)) {
      $dara.Model.validateArray(this.fullVerifyTableStatistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

