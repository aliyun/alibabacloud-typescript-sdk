// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMetricRuleResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0671A721-0D7A-4F11-BB77-2416325D65AB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values: true: The request was successful. false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
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

