// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventStatusShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID that identifies the application to which the operation belongs.
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
  eventIdsShrink?: string;
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
   * The operation parameters that contain additional parameter information required to execute the operation.
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
   * The operation source that identifies the source system or module that triggered this status update request.
   * 
   * @example
   * xx
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      eventIdsShrink: 'EventIds',
      operationCode: 'OperationCode',
      operationParams: 'OperationParams',
      regionId: 'RegionId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      eventIdsShrink: 'string',
      operationCode: 'string',
      operationParams: 'string',
      regionId: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

