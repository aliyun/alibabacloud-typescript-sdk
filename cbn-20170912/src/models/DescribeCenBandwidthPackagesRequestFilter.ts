// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenBandwidthPackagesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter conditions. You can use filter conditions to filter the bandwidth plans that you want to query. The following filter conditions are supported:
   * 
   * *   **CenId**: CEN instance ID
   * 
   * *   **Status**: bandwidth plan status. Valid values:
   * 
   *     *   **Idle**: not associated with a CEN instance.
   *     *   **InUse**: associated with a CEN instance.
   * 
   * *   **CenBandwidthPackageId**: bandwidth plan ID
   * 
   * *   **Name**: bandwidth plan name You can specify one or more filter conditions. The maximum value of **N** is **5**.
   * 
   * @example
   * CenId
   */
  key?: string;
  /**
   * @remarks
   * Specify a filter value based on the **Key** parameter. You can specify multiple filter values for each **Key**. The logical operator between filter values is **OR**. If one filter value is matched, the filter condition is matched.
   * 
   * @example
   * Idle
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

