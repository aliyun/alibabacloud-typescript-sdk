// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAvailableHoneypotResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The display name of the image.
   * 
   * @example
   * RuoYi
   */
  honeypotImageDisplayName?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * sha256:007095d6de9c7a343e9fc1f74a7efc9c5de9d5454789d2fa505a1b3fc62****
   */
  honeypotImageId?: string;
  /**
   * @remarks
   * The name of the image that is used for the honeypot.
   * 
   * @example
   * ruoyi
   */
  honeypotImageName?: string;
  /**
   * @remarks
   * The type of the image.
   * 
   * @example
   * Web
   */
  honeypotImageType?: string;
  /**
   * @remarks
   * The version of the image.
   * 
   * @example
   * 1.0.2
   */
  honeypotImageVersion?: string;
  /**
   * @remarks
   * The port that is supported by the honeypot. The value is in the JSON format. Valid values:
   * 
   * *   **log_type**: the log type
   * *   **proto**: the supported protocol
   * *   **description**: the description
   * *   **ports**: the supported ports
   * *   **port_str**: the supported port number of the string type
   * *   **type**: the type
   * 
   * @example
   * [{"log_type":"web","proto":"tcp","description":"webServerPort","ports":[80.0],"port_str":"80","type":"web"}]
   */
  multiports?: string;
  /**
   * @remarks
   * The protocol that is supported by the honeypot.
   * 
   * @example
   * tcp
   */
  proto?: string;
  /**
   * @remarks
   * The service port of the honeypot.
   * 
   * @example
   * 27017.0
   */
  servicePort?: string;
  /**
   * @remarks
   * The configuration template of the honeypot.
   * 
   * @example
   * {}
   */
  template?: string;
  static names(): { [key: string]: string } {
    return {
      honeypotImageDisplayName: 'HoneypotImageDisplayName',
      honeypotImageId: 'HoneypotImageId',
      honeypotImageName: 'HoneypotImageName',
      honeypotImageType: 'HoneypotImageType',
      honeypotImageVersion: 'HoneypotImageVersion',
      multiports: 'Multiports',
      proto: 'Proto',
      servicePort: 'ServicePort',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      honeypotImageDisplayName: 'string',
      honeypotImageId: 'string',
      honeypotImageName: 'string',
      honeypotImageType: 'string',
      honeypotImageVersion: 'string',
      multiports: 'string',
      proto: 'string',
      servicePort: 'string',
      template: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableHoneypotResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The number of images that are used for the honeypot.
   * 
   * @example
   * 22
   */
  count?: number;
  /**
   * @remarks
   * An array consisting of the information about the images that are used for the honeypot.
   */
  data?: ListAvailableHoneypotResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 6C24D883-984D-52FD-BB66-5F89F86E4837
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
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
      count: 'number',
      data: { 'type': 'array', 'itemType': ListAvailableHoneypotResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

