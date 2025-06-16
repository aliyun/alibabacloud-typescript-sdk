// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGeographicSubRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The region list.
   */
  geographicSubRegions?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      geographicSubRegions: 'GeographicSubRegions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      geographicSubRegions: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.geographicSubRegions)) {
      $dara.Model.validateArray(this.geographicSubRegions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

