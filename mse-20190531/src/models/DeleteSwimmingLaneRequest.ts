// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSwimmingLaneRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The ID of the lane.
   * 
   * This parameter is required.
   * 
   * @example
   * 229
   */
  laneId?: number;
  /**
   * @remarks
   * The name of the Microservices Engine (MSE) namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      laneId: 'LaneId',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      laneId: 'number',
      namespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

