// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubscriptionStatsResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The number of assigned seats.
   * 
   * @example
   * 1
   */
  assignedSeats?: number;
  /**
   * @remarks
   * The total credits quota for the seat.
   * 
   * @example
   * 100
   */
  seatCredits?: number;
  /**
   * @remarks
   * The refresh time of the current cycle, in milliseconds.
   * 
   * @example
   * 1781422734
   */
  seatRefreshTime?: number;
  /**
   * @remarks
   * The remaining credits for the current cycle.
   * 
   * @example
   * 40
   */
  seatRemainingCredits?: number;
  /**
   * @remarks
   * The seat type (specType). Valid values:
   * - standard: Standard seat.
   * - pro: Pro seat.
   * - max: Premium seat.
   * 
   * @example
   * standard
   */
  seatType?: string;
  /**
   * @remarks
   * The total number of seats.
   * 
   * @example
   * 2
   */
  totalSeats?: number;
  static names(): { [key: string]: string } {
    return {
      assignedSeats: 'AssignedSeats',
      seatCredits: 'SeatCredits',
      seatRefreshTime: 'SeatRefreshTime',
      seatRemainingCredits: 'SeatRemainingCredits',
      seatType: 'SeatType',
      totalSeats: 'TotalSeats',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedSeats: 'number',
      seatCredits: 'number',
      seatRefreshTime: 'number',
      seatRemainingCredits: 'number',
      seatType: 'string',
      totalSeats: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionStatsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of seat information, grouped by specType.
   */
  items?: GetSubscriptionStatsResponseBodyDataItems[];
  /**
   * @remarks
   * The subscription end time, in milliseconds.
   * 
   * @example
   * 1781422734
   */
  subscriptionEndTime?: number;
  /**
   * @remarks
   * The subscription start time, in milliseconds.
   * 
   * @example
   * 1781422733
   */
  subscriptionStartTime?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      subscriptionEndTime: 'SubscriptionEndTime',
      subscriptionStartTime: 'SubscriptionStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetSubscriptionStatsResponseBodyDataItems },
      subscriptionEndTime: 'number',
      subscriptionStartTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSubscriptionStatsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The business data.
   */
  data?: GetSubscriptionStatsResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful. Valid values:
   * 
   * - true: Successful.
   * - false: Failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSubscriptionStatsResponseBodyData,
      message: 'string',
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

