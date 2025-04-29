// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightModifyListingSearchV2ShrinkRequest extends $dara.Model {
  cabinClassShrink?: string;
  depDateShrink?: string;
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
  passengerSegmentRelationsShrink?: string;
  /**
   * @example
   * 2
   */
  searchMode?: number;
  searchRetryToken?: string;
  selectedSegmentsShrink?: string;
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
      cabinClassShrink: 'cabin_class',
      depDateShrink: 'dep_date',
      interfaceCallerIsSupportRetry: 'interface_caller_is_support_retry',
      isvName: 'isv_name',
      orderId: 'order_id',
      outOrderId: 'out_order_id',
      passengerSegmentRelationsShrink: 'passenger_segment_relations',
      searchMode: 'search_mode',
      searchRetryToken: 'search_retry_token',
      selectedSegmentsShrink: 'selected_segments',
      sessionId: 'session_id',
      voluntary: 'voluntary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cabinClassShrink: 'string',
      depDateShrink: 'string',
      interfaceCallerIsSupportRetry: 'boolean',
      isvName: 'string',
      orderId: 'number',
      outOrderId: 'string',
      passengerSegmentRelationsShrink: 'string',
      searchMode: 'number',
      searchRetryToken: 'string',
      selectedSegmentsShrink: 'string',
      sessionId: 'string',
      voluntary: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

