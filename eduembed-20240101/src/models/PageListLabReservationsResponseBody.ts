// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PageListLabReservationsResponseBodyLabReservations } from "./PageListLabReservationsResponseBodyLabReservations";


export class PageListLabReservationsResponseBody extends $dara.Model {
  /**
   * @example
   * 00000
   */
  code?: string;
  labReservations?: PageListLabReservationsResponseBodyLabReservations[];
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 9ADC729B-...
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * 32
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      labReservations: 'LabReservations',
      message: 'Message',
      page: 'Page',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      labReservations: { 'type': 'array', 'itemType': PageListLabReservationsResponseBodyLabReservations },
      message: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.labReservations)) {
      $dara.Model.validateArray(this.labReservations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

