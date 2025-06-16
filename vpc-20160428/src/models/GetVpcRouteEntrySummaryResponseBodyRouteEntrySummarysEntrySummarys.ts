// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVpcRouteEntrySummaryResponseBodyRouteEntrySummarysEntrySummarys extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The type of the route. Valid values:
   * 
   * *   **All**: all route types
   * *   **Custom**: a custom route
   * *   **System**: a system route
   * *   **BGP**: a BGP route
   * *   **CEN**: a CEN route
   * 
   * @example
   * Custom
   */
  routeEntryType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      routeEntryType: 'RouteEntryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      routeEntryType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

