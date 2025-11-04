// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIAgentDialoguesRequest extends $dara.Model {
  /**
   * @remarks
   * Specify the end of the time range to query using a UNIX timestamp accurate to milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 17358082464030
   */
  endTime?: number;
  /**
   * @remarks
   * The sorting order. Valid values: 
   * 
   * - DESC: descending order (default)
   * - ASC: ascending order
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  roundLimit?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * This parameter is required.
   * 
   * @example
   * f27f9b9be28642a88e18****
   */
  sessionId?: string;
  /**
   * @remarks
   * Specify the start of the time range to query using a UNIX timestamp accurate to milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      roundLimit: 'RoundLimit',
      sessionId: 'SessionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      roundLimit: 'string',
      sessionId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

