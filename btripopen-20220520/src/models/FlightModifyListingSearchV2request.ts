// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FlightModifyListingSearchV2RequestPassengerSegmentRelations } from "./FlightModifyListingSearchV2requestPassengerSegmentRelations";
import { FlightModifyListingSearchV2RequestSelectedSegments } from "./FlightModifyListingSearchV2requestSelectedSegments";


export class FlightModifyListingSearchV2Request extends $dara.Model {
  cabinClass?: number[];
  depDate?: string[];
  interfaceCallerIsSupportRetry?: boolean;
  /**
   * @example
   * name
   */
  isvName?: string;
  /**
   * @example
   * 1017002195370467138
   */
  orderId?: number;
  /**
   * @example
   * 1017002195370467137
   */
  outOrderId?: string;
  passengerSegmentRelations?: FlightModifyListingSearchV2RequestPassengerSegmentRelations[];
  /**
   * @example
   * 2
   */
  searchMode?: number;
  searchRetryToken?: string;
  selectedSegments?: FlightModifyListingSearchV2RequestSelectedSegments[];
  /**
   * @example
   * a2ffebfe733742aab5c491d960ba3d59
   */
  sessionId?: string;
  /**
   * @example
   * true
   */
  voluntary?: boolean;
  static names(): { [key: string]: string } {
    return {
      cabinClass: 'cabin_class',
      depDate: 'dep_date',
      interfaceCallerIsSupportRetry: 'interface_caller_is_support_retry',
      isvName: 'isv_name',
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      passengerSegmentRelations: 'passenger_segment_relations',
      searchMode: 'search_mode',
      searchRetryToken: 'search_retry_token',
      selectedSegments: 'selected_segments',
      sessionId: 'session_id',
      voluntary: 'voluntary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabinClass: { 'type': 'array', 'itemType': 'number' },
      depDate: { 'type': 'array', 'itemType': 'string' },
      interfaceCallerIsSupportRetry: 'boolean',
      isvName: 'string',
      orderId: 'number',
      outOrderId: 'string',
      passengerSegmentRelations: { 'type': 'array', 'itemType': FlightModifyListingSearchV2RequestPassengerSegmentRelations },
      searchMode: 'number',
      searchRetryToken: 'string',
      selectedSegments: { 'type': 'array', 'itemType': FlightModifyListingSearchV2RequestSelectedSegments },
      sessionId: 'string',
      voluntary: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.cabinClass)) {
      $dara.Model.validateArray(this.cabinClass);
    }
    if(Array.isArray(this.depDate)) {
      $dara.Model.validateArray(this.depDate);
    }
    if(Array.isArray(this.passengerSegmentRelations)) {
      $dara.Model.validateArray(this.passengerSegmentRelations);
    }
    if(Array.isArray(this.selectedSegments)) {
      $dara.Model.validateArray(this.selectedSegments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

