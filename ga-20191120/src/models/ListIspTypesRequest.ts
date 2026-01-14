// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIspTypesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance that you want to query.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The type of the Global Accelerator (GA) instance to be queried. Valid values:
   * 
   * *   **basic**: basic GA instance
   * *   **standard**: standard GA instance
   * 
   * @example
   * basic
   */
  acceleratorType?: string;
  /**
   * @remarks
   * The ID of the acceleration region to be queried.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  businessRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      acceleratorType: 'AcceleratorType',
      businessRegionId: 'BusinessRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      acceleratorType: 'string',
      businessRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

