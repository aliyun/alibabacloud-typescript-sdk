// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegionsResponseBodyRegions extends $dara.Model {
  /**
   * @remarks
   * The English name.
   * 
   * @example
   * cn-shenzhen
   */
  enName?: string;
  /**
   * @remarks
   * The region name.
   * 
   * @example
   * Shenzhen
   */
  localName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      enName: 'enName',
      localName: 'localName',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enName: 'string',
      localName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records returned per request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The next token.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The requested region IDs.
   */
  regions?: ListRegionsResponseBodyRegions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      regions: 'regions',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regions: { 'type': 'array', 'itemType': ListRegionsResponseBodyRegions },
      requestId: 'string',
      totalCount: 'number',
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

