// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplyCoordinationForMonitoringResponseBodyCoordinateFlowModels } from "./ApplyCoordinationForMonitoringResponseBodyCoordinateFlowModels";


export class ApplyCoordinationForMonitoringResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of stream collaboration models.
   */
  coordinateFlowModels?: ApplyCoordinationForMonitoringResponseBodyCoordinateFlowModels[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      coordinateFlowModels: 'CoordinateFlowModels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinateFlowModels: { 'type': 'array', 'itemType': ApplyCoordinationForMonitoringResponseBodyCoordinateFlowModels },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.coordinateFlowModels)) {
      $dara.Model.validateArray(this.coordinateFlowModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

