// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMemoryAutoExtractionSwitchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of automatic memory files cleared in this synchronous operation. The value is 0 if no files are cleared or no memories are available to be cleared.
   * 
   * @example
   * 3
   */
  clearedCount?: number;
  /**
   * @remarks
   * The business status code. A value of 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The updated status of the automatic memory collection toggle. A value of true indicates that the feature is enabled, and a value of false indicates that the feature is disabled.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The error description.
   * 
   * @example
   * The current user is not an active member of the group cg_12345
   */
  message?: string;
  /**
   * @remarks
   * The request tracking ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clearedCount: 'clearedCount',
      code: 'code',
      enabled: 'enabled',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clearedCount: 'number',
      code: 'string',
      enabled: 'boolean',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

