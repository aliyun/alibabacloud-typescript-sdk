// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCenGeographicSpansResponseBodyGeographicSpanModelsGeographicSpanModel extends $dara.Model {
  /**
   * @remarks
   * The ID of the pair of connected areas.
   * 
   * @example
   * china_asia-pacific
   */
  geographicSpanId?: string;
  /**
   * @remarks
   * The ID of the local area.
   * 
   * @example
   * asia-pacific
   */
  localGeoRegionId?: string;
  /**
   * @remarks
   * The ID of the peer area.
   * 
   * @example
   * china
   */
  oppositeGeoRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      geographicSpanId: 'GeographicSpanId',
      localGeoRegionId: 'LocalGeoRegionId',
      oppositeGeoRegionId: 'OppositeGeoRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      geographicSpanId: 'string',
      localGeoRegionId: 'string',
      oppositeGeoRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenGeographicSpansResponseBodyGeographicSpanModels extends $dara.Model {
  geographicSpanModel?: DescribeCenGeographicSpansResponseBodyGeographicSpanModelsGeographicSpanModel[];
  static names(): { [key: string]: string } {
    return {
      geographicSpanModel: 'GeographicSpanModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      geographicSpanModel: { 'type': 'array', 'itemType': DescribeCenGeographicSpansResponseBodyGeographicSpanModelsGeographicSpanModel },
    };
  }

  validate() {
    if(Array.isArray(this.geographicSpanModel)) {
      $dara.Model.validateArray(this.geographicSpanModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCenGeographicSpansResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of areas.
   */
  geographicSpanModels?: DescribeCenGeographicSpansResponseBodyGeographicSpanModels;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 09780287-BC24-4164-8334-773432E32696
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      geographicSpanModels: 'GeographicSpanModels',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      geographicSpanModels: DescribeCenGeographicSpansResponseBodyGeographicSpanModels,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.geographicSpanModels && typeof (this.geographicSpanModels as any).validate === 'function') {
      (this.geographicSpanModels as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

