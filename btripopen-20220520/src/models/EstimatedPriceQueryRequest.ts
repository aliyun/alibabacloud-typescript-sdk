// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EstimatedPriceQueryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  arrCity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * flight
   */
  category?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  depCity?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: number;
  /**
   * @example
   * 1245
   */
  itineraryId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: number;
  subCorpId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      category: 'category',
      depCity: 'dep_city',
      endTime: 'end_time',
      itineraryId: 'itinerary_id',
      startTime: 'start_time',
      subCorpId: 'sub_corp_id',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      category: 'string',
      depCity: 'string',
      endTime: 'number',
      itineraryId: 'string',
      startTime: 'number',
      subCorpId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

