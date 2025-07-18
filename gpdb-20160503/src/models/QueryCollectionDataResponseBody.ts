// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCollectionDataResponseBodyMatchesMatchValues extends $dara.Model {
  value?: number[];
  static names(): { [key: string]: string } {
    return {
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCollectionDataResponseBodyMatchesMatch extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the vector data.
   * 
   * @example
   * doca-1234
   */
  id?: string;
  /**
   * @remarks
   * Metadata.
   */
  metadata?: { [key: string]: string };
  /**
   * @remarks
   * The similarity score of this data, which is related to the algorithm `(l2/ip/cosine)` specified when creating the index.
   * 
   * @example
   * 0.12345
   */
  score?: number;
  /**
   * @remarks
   * List of vector data.
   */
  values?: QueryCollectionDataResponseBodyMatchesMatchValues;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      metadata: 'Metadata',
      score: 'Score',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      score: 'number',
      values: QueryCollectionDataResponseBodyMatchesMatchValues,
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(this.values && typeof (this.values as any).validate === 'function') {
      (this.values as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCollectionDataResponseBodyMatches extends $dara.Model {
  match?: QueryCollectionDataResponseBodyMatchesMatch[];
  static names(): { [key: string]: string } {
    return {
      match: 'match',
    };
  }

  static types(): { [key: string]: any } {
    return {
      match: { 'type': 'array', 'itemType': QueryCollectionDataResponseBodyMatchesMatch },
    };
  }

  validate() {
    if(Array.isArray(this.match)) {
      $dara.Model.validateArray(this.match);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCollectionDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * Data list.
   */
  matches?: QueryCollectionDataResponseBodyMatches;
  /**
   * @remarks
   * Detailed information when the request fails.
   * 
   * @example
   * 0.1234
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * Status, with the following values:
   * - **success**: Success.
   * - **fail**: Failure.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * Only returned when the Offset is not 0, this value represents the total number of hits for the search criteria.
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      matches: 'Matches',
      message: 'Message',
      requestId: 'RequestId',
      status: 'Status',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matches: QueryCollectionDataResponseBodyMatches,
      message: 'string',
      requestId: 'string',
      status: 'string',
      total: 'number',
    };
  }

  validate() {
    if(this.matches && typeof (this.matches as any).validate === 'function') {
      (this.matches as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

