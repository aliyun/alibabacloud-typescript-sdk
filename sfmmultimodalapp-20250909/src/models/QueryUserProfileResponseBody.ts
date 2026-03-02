// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserProfileResponseBodyDataAttributes extends $dara.Model {
  /**
   * @remarks
   * id
   * 
   * @example
   * babadd60b9e74d4f9d12cdf954f2c667
   */
  id?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * 18
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
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

export class QueryUserProfileResponseBodyData extends $dara.Model {
  attributes?: QueryUserProfileResponseBodyDataAttributes[];
  /**
   * @example
   * project name pass the check
   */
  description?: string;
  /**
   * @example
   * cert-15192707
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': QueryUserProfileResponseBodyDataAttributes },
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserProfileResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: QueryUserProfileResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * BE6BCB9B-7D90-5A56-96C8-A5E990D85B21
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
      data: QueryUserProfileResponseBodyData,
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

