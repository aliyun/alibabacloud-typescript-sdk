// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AncillarySuggestResponseBodyDataSegAncillaryMapListAncillaryBaggageAncillary extends $dara.Model {
  /**
   * @remarks
   * The number of baggage pieces. Valid values: 3, 2, 1, 0, and -2. A value of -2 indicates weight-based calculation.
   * 
   * @example
   * 0
   */
  baggageAmount?: number;
  /**
   * @remarks
   * The baggage weight, ranging from 0 to 50. If isAllWeight is set to true, this value represents the total weight of all pieces.
   * 
   * @example
   * 0
   */
  baggageWeight?: number;
  /**
   * @remarks
   * The unit of baggage weight.
   * 
   * @example
   * KG
   */
  baggageWeightUnit?: string;
  /**
   * @remarks
   * Indicates whether the weight represents the total weight of all baggage pieces.
   * 
   * @example
   * true
   */
  isAllWeight?: boolean;
  /**
   * @remarks
   * The total price.
   * 
   * @example
   * 10.0
   */
  price?: number;
  static names(): { [key: string]: string } {
    return {
      baggageAmount: 'baggage_amount',
      baggageWeight: 'baggage_weight',
      baggageWeightUnit: 'baggage_weight_unit',
      isAllWeight: 'is_all_weight',
      price: 'price',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baggageAmount: 'number',
      baggageWeight: 'number',
      baggageWeightUnit: 'string',
      isAllWeight: 'boolean',
      price: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AncillarySuggestResponseBodyDataSegAncillaryMapListAncillary extends $dara.Model {
  /**
   * @remarks
   * The ancillary product ID.
   * 
   * @example
   * eJwz8DeySEo0NjQ01TU3TU
   */
  ancillaryId?: string;
  /**
   * @remarks
   * The ancillary product type. Currently supported value: 4 (paid baggage).
   * 
   * @example
   * 4
   */
  ancillaryType?: number;
  /**
   * @remarks
   * The baggage ancillary details.
   */
  baggageAncillary?: AncillarySuggestResponseBodyDataSegAncillaryMapListAncillaryBaggageAncillary;
  static names(): { [key: string]: string } {
    return {
      ancillaryId: 'ancillary_id',
      ancillaryType: 'ancillary_type',
      baggageAncillary: 'baggage_ancillary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ancillaryId: 'string',
      ancillaryType: 'number',
      baggageAncillary: AncillarySuggestResponseBodyDataSegAncillaryMapListAncillaryBaggageAncillary,
    };
  }

  validate() {
    if(this.baggageAncillary && typeof (this.baggageAncillary as any).validate === 'function') {
      (this.baggageAncillary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AncillarySuggestResponseBodyDataSegAncillaryMapList extends $dara.Model {
  /**
   * @remarks
   * The ancillary product.
   */
  ancillary?: AncillarySuggestResponseBodyDataSegAncillaryMapListAncillary;
  /**
   * @remarks
   * The list of segment IDs. These segments share the same ancillary product.
   */
  segmentIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      ancillary: 'ancillary',
      segmentIdList: 'segment_id_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ancillary: AncillarySuggestResponseBodyDataSegAncillaryMapListAncillary,
      segmentIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.ancillary && typeof (this.ancillary as any).validate === 'function') {
      (this.ancillary as any).validate();
    }
    if(Array.isArray(this.segmentIdList)) {
      $dara.Model.validateArray(this.segmentIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AncillarySuggestResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The mapping between flights and ancillary products.
   */
  segAncillaryMapList?: AncillarySuggestResponseBodyDataSegAncillaryMapList[];
  /**
   * @remarks
   * The solution_id of the flight.
   * 
   * @example
   * eJwz8DeySEo0NjQ01TU3TU7TNTFINNO1SE5O0jVKM0hKNjEwTElLNYwz0A32cNT1dfPVNTIwMjYwNjRQ8/A3NLI01Q0Ic0cRBwBVFxJJ
   */
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      segAncillaryMapList: 'seg_ancillary_map_list',
      solutionId: 'solution_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      segAncillaryMapList: { 'type': 'array', 'itemType': AncillarySuggestResponseBodyDataSegAncillaryMapList },
      solutionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.segAncillaryMapList)) {
      $dara.Model.validateArray(this.segAncillaryMapList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AncillarySuggestResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * The data returned for a successful request.
   */
  data?: AncillarySuggestResponseBodyData;
  /**
   * @remarks
   * The business error code.
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * The data returned with the error.
   * 
   * @example
   * null
   */
  errorData?: any;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * The HTTP status code. The value is always 200 for successful requests.
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: AncillarySuggestResponseBodyData,
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

