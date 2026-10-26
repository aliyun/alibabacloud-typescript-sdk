// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunInstanceInspectionRequestItemOverrides extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"lookback":"30m"}
   */
  parameters?: any;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rmq.consumer-health
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'parameters',
      templateCode: 'templateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: 'any',
      templateCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunInstanceInspectionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * inspection-request-001
   */
  clientToken?: string;
  /**
   * @example
   * [{"templateCode":"rmq.traffic-capacity","parameters":{"lookback":"6h"}}]
   */
  itemOverrides?: RunInstanceInspectionRequestItemOverrides[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      itemOverrides: 'itemOverrides',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      itemOverrides: { 'type': 'array', 'itemType': RunInstanceInspectionRequestItemOverrides },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.itemOverrides)) {
      $dara.Model.validateArray(this.itemOverrides);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

