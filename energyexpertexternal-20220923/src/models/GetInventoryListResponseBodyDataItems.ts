// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInventoryListResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * Emission quantity: may be positive, negative, or 0. To ensure the calculation accuracy, 24 decimal places are reserved for the calculation process. We recommend that you intercept data based on your business requirements.
   * 
   * @example
   * 1000.000000000000000000000000000000
   */
  carbonEmission?: number;
  /**
   * @remarks
   * Name 
   * 
   * > The name is related to the request parameters group. Request parameters: resource, return name parameter meaning: list name; request parameters: process, return name parameter meaning: process name; request parameters: resourceType, return name parameter meaning: inventory resource type name; request parameters: processType, return name parameter meaning: flow name.
   * 
   * @example
   * Energy
   */
  name?: string;
  /**
   * @remarks
   * Percentage
   * 
   * @example
   * 99.01
   */
  percent?: string;
  /**
   * @remarks
   * Process Name: It is only meaningful when the request parameters group is resource.
   * 
   * @example
   * Process-1
   */
  processName?: string;
  static names(): { [key: string]: string } {
    return {
      carbonEmission: 'carbonEmission',
      name: 'name',
      percent: 'percent',
      processName: 'processName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmission: 'number',
      name: 'string',
      percent: 'string',
      processName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

