// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryJenkinsImageRegistryPersistenceDayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The repository retention duration. Unit: days.
   * 
   * @example
   * 30
   */
  data?: number;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique ID for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * EA4AC8B7-0C18-5BC1-9DA4-798B3BE4****
   */
  requestId?: string;
  /**
   * @remarks
   * The time consumed for the execution. Unit: seconds.
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

