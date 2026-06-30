// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddRuleCategoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the newly added rule category is selected.
   * 
   * @example
   * false
   */
  select?: boolean;
  /**
   * @remarks
   * Rule category ID
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      select: 'Select',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      select: 'boolean',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddRuleCategoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Return Result
   */
  data?: AddRuleCategoryResponseBodyData;
  /**
   * @remarks
   * Response message
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * D10B9203-1A6A-49DA-AE56-4D160DD37DBC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddRuleCategoryResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

