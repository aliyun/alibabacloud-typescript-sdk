// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProfileResponseBodyData extends $dara.Model {
  /**
   * @example
   * 210235A52L5248C0000N
   */
  description?: string;
  /**
   * @example
   * ST-JobTemplate
   */
  name?: string;
  /**
   * @remarks
   * schema id
   * 
   * @example
   * 33440
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      schemaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProfileResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: CreateProfileResponseBodyData;
  /**
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * F62225F8-DDE4-526E-A88B-08906DED5060
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateProfileResponseBodyData,
      httpStatusCode: 'number',
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

