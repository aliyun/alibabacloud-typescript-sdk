// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeployHttpApiRoutesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to publish routes asynchronously. Default value: true. An asynchronous publish returns the acceptance result of each route. If you set this parameter to false, the system waits for the batch processing to complete and returns the final result and statistics for each route.
   * 
   * @example
   * false
   */
  async?: boolean;
  /**
   * @remarks
   * Specifies whether to publish all routes visible to the current user under the API. Default value: false. If you set this parameter to true, all visible routes are targeted and routeIds is ignored.
   * 
   * @example
   * false
   */
  deployAll?: boolean;
  /**
   * @remarks
   * The list of route IDs to publish. If deployAll is omitted or set to false, you must provide at least one route ID. If any route does not exist or belongs to another API, the entire batch request is rejected.
   * 
   * @example
   * ["hr-example001","hr-example002"]
   */
  routeIds?: string[];
  static names(): { [key: string]: string } {
    return {
      async: 'async',
      deployAll: 'deployAll',
      routeIds: 'routeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      deployAll: 'boolean',
      routeIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.routeIds)) {
      $dara.Model.validateArray(this.routeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

