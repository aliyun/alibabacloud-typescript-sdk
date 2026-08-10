// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChartsValue } from "./ChartsValue";


export class GetQpsStatsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The chart configurations.
   */
  charts?: { [key: string]: ChartsValue };
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify a request. It can be used to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      charts: 'Charts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charts: { 'type': 'map', 'keyType': 'string', 'valueType': ChartsValue },
      requestId: 'string',
    };
  }

  validate() {
    if(this.charts) {
      $dara.Model.validateMap(this.charts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

