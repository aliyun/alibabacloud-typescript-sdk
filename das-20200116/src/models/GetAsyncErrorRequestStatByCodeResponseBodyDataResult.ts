// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAsyncErrorRequestStatByCodeResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The number of SQL queries corresponding to the error code.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * 1062
   */
  errorCode?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      errorCode: 'errorCode',
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      errorCode: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

