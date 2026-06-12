// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckServiceDeployableResponseBodyCheckResults extends $dara.Model {
  /**
   * @remarks
   * The message returned for the result.
   * 
   * @example
   * ""
   */
  message?: string;
  skippable?: boolean;
  /**
   * @remarks
   * The type of precheck. Valid values:
   * 
   * - Balance: The account balance.
   * 
   * - Quota: The resource quota.
   * 
   * @example
   * Balance
   */
  type?: string;
  /**
   * @remarks
   * The check result.
   * 
   * @example
   * true
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      skippable: 'Skippable',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      skippable: 'boolean',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceDeployableResponseBody extends $dara.Model {
  /**
   * @remarks
   * The check results.
   */
  checkResults?: CheckServiceDeployableResponseBodyCheckResults[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 06BF8F22-02DC-4750-83DF-3FFC11C065EA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      checkResults: 'CheckResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkResults: { 'type': 'array', 'itemType': CheckServiceDeployableResponseBodyCheckResults },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkResults)) {
      $dara.Model.validateArray(this.checkResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

