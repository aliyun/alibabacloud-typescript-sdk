// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RequestContents } from "./RequestContents";
import { LocationInfo } from "./LocationInfo";


export class UnifiedSearchInput extends $dara.Model {
  advancedParams?: { [key: string]: any };
  category?: string;
  contents?: RequestContents;
  engineType?: string;
  location?: string;
  locationInfo?: LocationInfo;
  query?: string;
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

