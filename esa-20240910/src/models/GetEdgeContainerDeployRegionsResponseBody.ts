// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerDeployRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The regions.
   */
  regions?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EDBD3EB3-97DA-5465-AEF5-8DCA5DC5E395
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

