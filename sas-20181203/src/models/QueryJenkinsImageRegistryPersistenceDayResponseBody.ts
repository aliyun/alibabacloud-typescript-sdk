// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryJenkinsImageRegistryPersistenceDayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The retention period. Unit: days.
   * 
   * @example
   * 30
   */
  data?: number;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * EA4AC8B7-0C18-5BC1-9DA4-798B3BE4****
   */
  requestId?: string;
  /**
   * @remarks
   * The time consumed. Unit: seconds.
   * 
   * @example
   * 1
   */
  timeCost?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      timeCost: 'TimeCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
      httpStatusCode: 'number',
      requestId: 'string',
      timeCost: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

