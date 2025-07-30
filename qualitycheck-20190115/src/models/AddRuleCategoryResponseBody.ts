// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddRuleCategoryResponseBodyData extends $dara.Model {
  select?: boolean;
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
   * @example
   * 200
   */
  code?: string;
  data?: AddRuleCategoryResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
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

