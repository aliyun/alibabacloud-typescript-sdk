// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceConsumersPageResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The name of the service consumer.
   * 
   * @example
   * k8s-lq-cartservice
   */
  edasAppName?: string;
  /**
   * @remarks
   * The ID of the service consumer.
   * 
   * @example
   * efbda488-7b33-432f-a40d-****0047****
   */
  edassAppId?: string;
  /**
   * @remarks
   * The IP address of the service consumer.
   * 
   * @example
   * 10.20.x.xx
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      edasAppName: 'EdasAppName',
      edassAppId: 'EdassAppId',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edasAppName: 'string',
      edassAppId: 'string',
      ip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceConsumersPageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data array that is returned.
   */
  content?: GetServiceConsumersPageResponseBodyDataContent[];
  /**
   * @remarks
   * The number of entries to return on each page.
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
   * 3
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
      content: { 'type': 'array', 'itemType': GetServiceConsumersPageResponseBodyDataContent },
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

export class GetServiceConsumersPageResponseBody extends $dara.Model {
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
   * The data that is returned.
   */
  data?: GetServiceConsumersPageResponseBodyData;
  /**
   * @remarks
   * The message that is returned for the request.
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
      data: GetServiceConsumersPageResponseBodyData,
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

