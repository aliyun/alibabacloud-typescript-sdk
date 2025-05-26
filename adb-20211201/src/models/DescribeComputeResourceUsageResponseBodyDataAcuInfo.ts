// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComputeResourceUsageResponseBodyDataAcuInfo extends $dara.Model {
  /**
   * @remarks
   * The resource usage metric. Valid values:
   * 
   * *   `TotalAcuNumber`: the total number of ACUs.
   * *   `ReservedAcuNumber`: the number of ACUs for the reserved resources.
   * *   `ReservedAcuUsageNumber`: the number of ACUs for the reserved resources that are used.
   * 
   * @example
   * TotalAcuNumber
   */
  name?: string;
  /**
   * @remarks
   * The values of the metric at specific points in time.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

