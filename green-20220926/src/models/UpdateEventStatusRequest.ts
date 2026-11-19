// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * id-xxx
   */
  appId?: string;
  /**
   * @remarks
   * The list of risk event IDs.
   */
  eventIds?: string[];
  /**
   * @remarks
   * The operation code that defines the specific type of event status change operation.
   * 
   * This parameter is required.
   * 
   * @example
   * resolve
   */
  operationCode?: string;
  /**
   * @remarks
   * The operation parameters that contain additional information required to perform the operation.
   * 
   * @example
   * {}
   */
  operationParams?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The source of the operation, which identifies the system or module that triggered this status update request.
   * 
   * @example
   * disposal
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      eventIds: 'EventIds',
      operationCode: 'OperationCode',
      operationParams: 'OperationParams',
      regionId: 'RegionId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      eventIds: { 'type': 'array', 'itemType': 'string' },
      operationCode: 'string',
      operationParams: 'string',
      regionId: 'string',
      source: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventIds)) {
      $dara.Model.validateArray(this.eventIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

