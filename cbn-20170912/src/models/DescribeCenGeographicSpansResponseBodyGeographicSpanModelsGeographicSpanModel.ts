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

