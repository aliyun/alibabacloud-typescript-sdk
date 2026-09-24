// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregatedDesktopsResponseBodyAggregations extends $dara.Model {
  /**
   * @remarks
   * The aggregation results.
   */
  desktopAggregation?: { [key: string]: string }[];
  static names(): { [key: string]: string } {
    return {
      desktopAggregation: 'DesktopAggregation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopAggregation: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
    };
  }

  validate() {
    if(Array.isArray(this.desktopAggregation)) {
      $dara.Model.validateArray(this.desktopAggregation);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregatedDesktopsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of aggregation field information.
   * >Notice: When you use an aggregate query, only aggregation results are returned. The list of matched metadata is not returned.
   */
  aggregations?: GetAggregatedDesktopsResponseBodyAggregations;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3147E094-C1F7-5001-8F04-C8CEE75D6552
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregations: 'Aggregations',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregations: GetAggregatedDesktopsResponseBodyAggregations,
      requestId: 'string',
    };
  }

  validate() {
    if(this.aggregations && typeof (this.aggregations as any).validate === 'function') {
      (this.aggregations as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

