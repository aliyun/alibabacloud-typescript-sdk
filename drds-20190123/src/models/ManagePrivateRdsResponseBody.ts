// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManagePrivateRdsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The parameter result set returned for the operation that is called for the custom ApsaraDB RDS instance.
   * 
   * @example
   * {"requestId":"E63C810A-4A13-47B6-BA67-C0E23A******"}
   */
  data?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0237BCD2-2C7A-4F86-A766-657AF6******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

