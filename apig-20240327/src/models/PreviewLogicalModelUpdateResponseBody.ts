// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreviewLogicalModelUpdateResponseBodyDataApis extends $dara.Model {
  /**
   * @example
   * Draft
   */
  configuration?: string;
  /**
   * @example
   * env-d00000000000000000000
   */
  environmentId?: string;
  errors?: string[];
  /**
   * @example
   * api-d00000000000000000000
   */
  httpApiId?: string;
  /**
   * @example
   * beta-chat
   */
  name?: string;
  /**
   * @example
   * 1
   */
  revision?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      environmentId: 'environmentId',
      errors: 'errors',
      httpApiId: 'httpApiId',
      name: 'name',
      revision: 'revision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: 'string',
      environmentId: 'string',
      errors: { 'type': 'array', 'itemType': 'string' },
      httpApiId: 'string',
      name: 'string',
      revision: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.errors)) {
      $dara.Model.validateArray(this.errors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewLogicalModelUpdateResponseBodyData extends $dara.Model {
  apis?: PreviewLogicalModelUpdateResponseBodyDataApis[];
  /**
   * @example
   * 6b8e7d61b3a94c7285cf0d9ee1a72c836b8e7d61b3a94c7285cf0d9ee1a72c83
   */
  confirmationToken?: string;
  /**
   * @example
   * 1
   */
  revision?: number;
  static names(): { [key: string]: string } {
    return {
      apis: 'apis',
      confirmationToken: 'confirmationToken',
      revision: 'revision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apis: { 'type': 'array', 'itemType': PreviewLogicalModelUpdateResponseBodyDataApis },
      confirmationToken: 'string',
      revision: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.apis)) {
      $dara.Model.validateArray(this.apis);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewLogicalModelUpdateResponseBody extends $dara.Model {
  /**
   * @example
   * Ok
   */
  code?: string;
  data?: PreviewLogicalModelUpdateResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: PreviewLogicalModelUpdateResponseBodyData,
      message: 'string',
      requestId: 'string',
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

