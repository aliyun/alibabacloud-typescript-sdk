// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceProvidersPageResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The remarks of the service provider.
   * 
   * @example
   * 172.178.XX.XX
   */
  iannotations?: string;
  /**
   * @remarks
   * The IP address of the service provider.
   * 
   * @example
   * 10.20.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The port number of the service provider.
   * 
   * @example
   * 12345
   */
  port?: string;
  /**
   * @remarks
   * The serialization type.
   * 
   * @example
   * hessian2
   */
  serializeType?: string;
  /**
   * @remarks
   * The service timeout period.
   * 
   * @example
   * 1000
   */
  timeout?: string;
  static names(): { [key: string]: string } {
    return {
      iannotations: 'Iannotations',
      ip: 'Ip',
      port: 'Port',
      serializeType: 'SerializeType',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      iannotations: 'string',
      ip: 'string',
      port: 'string',
      serializeType: 'string',
      timeout: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvidersPageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data array returned.
   */
  content?: GetServiceProvidersPageResponseBodyDataContent[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 5
   */
  size?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalElements?: number;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      size: 'Size',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': GetServiceProvidersPageResponseBodyDataContent },
      size: 'number',
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceProvidersPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data structure.
   */
  data?: GetServiceProvidersPageResponseBodyData;
  /**
   * @remarks
   * The message returned for the request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetServiceProvidersPageResponseBodyData,
      message: 'string',
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

