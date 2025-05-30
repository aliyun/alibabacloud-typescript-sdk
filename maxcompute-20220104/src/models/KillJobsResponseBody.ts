// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KillJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * success
   */
  data?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. If this parameter was not empty and the value of this parameter was not 200, the request failed.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0abb7ede16814560741256732e91b6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      httpCode: 'number',
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

