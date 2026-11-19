// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIqsUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud RAM user or the API key caller identifier to query.
   * 
   * @example
   * 138608930460****
   */
  callerId?: string;
  /**
   * @remarks
   * The end date for the usage query, inclusive. The format is YYYYMMDD. The date must be within the last 60 days.
   * 
   * @example
   * 20241017
   */
  endDate?: string;
  /**
   * @remarks
   * The start date for the usage query, inclusive. The format is YYYYMMDD. The date must be within the last 60 days.
   * 
   * @example
   * 20241011
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      callerId: 'callerId',
      endDate: 'endDate',
      startDate: 'startDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerId: 'string',
      endDate: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

