// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAIAgentDialoguesRequest extends $dara.Model {
  /**
   * @remarks
   * The end Unix timestamp (inclusive), in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 17358082464030
   */
  endTime?: number;
  /**
   * @remarks
   * The sort order. Valid values: `ASC` (ascending) and `DESC` (descending). Default value: `DESC`.
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
   * The number of items per page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The number of most recent dialogue rounds to return. This value must be a positive integer. This parameter is mutually exclusive with pagination parameters; if specified, it overrides them.
   * 
   * @example
   * 5
   */
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
   * The start Unix timestamp (inclusive), in milliseconds.
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

