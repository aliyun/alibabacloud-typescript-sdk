// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadMarketingPreferenceResponseBodyData extends $dara.Model {
  /**
   * @example
   * true
   */
  allowMarketing?: boolean;
  /**
   * @example
   * t*@qq.*
   */
  contactEmail?: string;
  /**
   * @example
   * 0
   */
  contactId?: number;
  /**
   * @example
   * 130*123
   */
  contactMobile?: string;
  /**
   * @example
   * test
   */
  contactName?: string;
  /**
   * @example
   * CEO
   */
  position?: string;
  static names(): { [key: string]: string } {
    return {
      allowMarketing: 'AllowMarketing',
      contactEmail: 'ContactEmail',
      contactId: 'ContactId',
      contactMobile: 'ContactMobile',
      contactName: 'ContactName',
      position: 'Position',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowMarketing: 'boolean',
      contactEmail: 'string',
      contactId: 'number',
      contactMobile: 'string',
      contactName: 'string',
      position: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReadMarketingPreferenceResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  data?: ReadMarketingPreferenceResponseBodyData;
  /**
   * @example
   * 成功
   */
  message?: string;
  /**
   * @example
   * A5F62766-1C2F-1F56-A39D-63E3D30F0633
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
      data: ReadMarketingPreferenceResponseBodyData,
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

