// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRelatedResourceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of cloud desktops associated with the image.
   * 
   * @example
   * 1
   */
  desktopCount?: number;
  /**
   * @remarks
   * The number of cloud desktop pools associated with the image.
   * 
   * @example
   * 0
   */
  desktopGroupCount?: number;
  /**
   * @remarks
   * The number of associated templates.
   * 
   * @example
   * 1
   */
  templateCount?: number;
  static names(): { [key: string]: string } {
    return {
      desktopCount: 'DesktopCount',
      desktopGroupCount: 'DesktopGroupCount',
      templateCount: 'TemplateCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopCount: 'number',
      desktopGroupCount: 'number',
      templateCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRelatedResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This field is returned when the request fails. A successful response may not contain this field.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data object.
   */
  data?: ListRelatedResourceResponseBodyData;
  /**
   * @remarks
   * The description of the request processing result. The value `success` is typically returned when the request is successful.
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
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. A value of true indicates that the request is successful, and a value of false indicates that the request fails.
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
      data: ListRelatedResourceResponseBodyData,
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

