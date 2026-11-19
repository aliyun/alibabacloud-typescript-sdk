// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ChartsValue } from "./ChartsValue";


export class GetQpsStatsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The chart configurations.
   * 
   * @example
   * {"cn-shanghai":{"X":["20260701"],"Y":[{"Name":"cn-shanghai","Data":[10]}]}}
   */
  charts?: { [key: string]: ChartsValue };
  /**
   * @remarks
   * The ID of the request.
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

