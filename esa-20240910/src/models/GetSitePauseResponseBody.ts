// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSitePauseResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether ESA is paused on the website. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  paused?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EEEBE525-F576-1196-8DAF-2D70CA3F4D2F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      paused: 'Paused',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paused: 'boolean',
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

