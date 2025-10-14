// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AncillarySuggestResponseBodyDataSegAncillaryMapListAncillaryBaggageAncillary extends $dara.Model {
  /**
   * @remarks
   * baggage quantity, values such as: 3, 2, 1, 0, -2.     -2 indicates weight-based
   * 
   * @example
   * 0
   */
  baggageAmount?: number;
  /**
   * @remarks
   * Baggage weight, 0-50. When isAllWeight=true, it represents the total weight of all baggages.
   * 
   * @example
   * 0
   */
  baggageWeight?: number;
  /**
   * @remarks
   * Unit of baggage weight
   * 
   * @example
   * KG
   */
  baggageWeightUnit?: string;
  /**
   * @remarks
   * Whether the weight is for all baggages
   * 
   * @example
   * true
   */
  isAllWeight?: boolean;
  /**
   * @remarks
   * Total price
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
   * Ancillary product ID
   * 
   * @example
   * eJwz8DeySEo0NjQ01TU3TU
   */
  ancillaryId?: string;
  /**
   * @remarks
   * Ancillary product type. currently supports 4: paid luggage
   * 
   * @example
   * 4
   */
  ancillaryType?: number;
  /**
   * @remarks
   * Baggage details
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
   * Ancillary product
   */
  ancillary?: AncillarySuggestResponseBodyDataSegAncillaryMapListAncillary;
  /**
   * @remarks
   * Segment ID list, these segments share the same ancillary
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
   * ancillary detail list
   */
  segAncillaryMapList?: AncillarySuggestResponseBodyDataSegAncillaryMapList[];
  /**
   * @remarks
   * solution_id, equals to solution_id in request
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
   * Request ID
   * 
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @remarks
   * Properly processed return data
   */
  data?: AncillarySuggestResponseBodyData;
  /**
   * @remarks
   * error code
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * Data carried in error handling
   * 
   * @example
   * null
   */
  errorData?: any;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * null
   */
  errorMsg?: string;
  /**
   * @remarks
   * http request successful, status value is always 200
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * true represents success, false represents failure
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

