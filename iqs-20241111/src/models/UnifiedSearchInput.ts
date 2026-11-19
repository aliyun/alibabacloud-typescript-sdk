// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RequestContents } from "./RequestContents";
import { LocationInfo } from "./LocationInfo";


export class UnifiedSearchInput extends $dara.Model {
  /**
   * @remarks
   * The advanced search parameters.
   * 
   * @example
   * {"numResults":"10"}
   */
  advancedParams?: { [key: string]: any };
  /**
   * @remarks
   * The query category. If specified, only search results from sites of the corresponding category are returned. Separate multiple categories with commas.
   * 
   * @example
   * medical
   */
  category?: string;
  /**
   * @remarks
   * The options for controlling the returned content.
   */
  contents?: RequestContents;
  /**
   * @remarks
   * The engine type. Default value: Generic. Valid values: Generic, GenericAdvanced. GenericAdvanced is billed separately and returns more records.
   * 
   * @example
   * Generic
   */
  engineType?: string;
  /**
   * @remarks
   * **[Deprecated]** The location parameter. Use locationInfo to specify a city or IP address.
   * 
   * @example
   * 60.194.214.228
   */
  location?: string;
  /**
   * @remarks
   * The location information, used for scenario-based searches such as weather.
   */
  locationInfo?: LocationInfo;
  /**
   * @remarks
   * The query content. The length limit is 1 to 100 characters.
   * 
   * @example
   * Apsara Conference
   */
  query?: string;
  /**
   * @remarks
   * The publication time range for the content.
   * 
   * @example
   * NoLimit
   */
  timeRange?: string;
  static names(): { [key: string]: string } {
    return {
      advancedParams: 'advancedParams',
      category: 'category',
      contents: 'contents',
      engineType: 'engineType',
      location: 'location',
      locationInfo: 'locationInfo',
      query: 'query',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      category: 'string',
      contents: RequestContents,
      engineType: 'string',
      location: 'string',
      locationInfo: LocationInfo,
      query: 'string',
      timeRange: 'string',
    };
  }

  validate() {
    if(this.advancedParams) {
      $dara.Model.validateMap(this.advancedParams);
    }
    if(this.contents && typeof (this.contents as any).validate === 'function') {
      (this.contents as any).validate();
    }
    if(this.locationInfo && typeof (this.locationInfo as any).validate === 'function') {
      (this.locationInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

