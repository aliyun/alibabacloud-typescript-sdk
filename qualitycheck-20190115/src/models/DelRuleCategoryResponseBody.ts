// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DelRuleCategoryResponseBodyData extends $dara.Model {
  /**
   * @example
   * false
   */
  select?: boolean;
  static names(): { [key: string]: string } {
    return {
      select: 'Select',
    };
  }

  static types(): { [key: string]: any } {
    return {
      select: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DelRuleCategoryResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: DelRuleCategoryResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * xxx
   */
  requestId?: string;
  /**
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
      data: DelRuleCategoryResponseBodyData,
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

