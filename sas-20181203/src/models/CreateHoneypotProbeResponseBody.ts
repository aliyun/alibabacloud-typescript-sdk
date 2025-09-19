// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHoneypotProbeResponseBodyHoneypotProbe extends $dara.Model {
  /**
   * @remarks
   * The ID of the probe.
   * 
   * @example
   * b69e9aa8-2ea8-4c5a-836a-c1fbacff****
   */
  probeId?: string;
  static names(): { [key: string]: string } {
    return {
      probeId: 'ProbeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      probeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHoneypotProbeResponseBody extends $dara.Model {
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
   * The information about the probe.
   */
  honeypotProbe?: CreateHoneypotProbeResponseBodyHoneypotProbe;
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
   * The message returned.
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
   * B7A839E8-70AE-591D-8D9E-C5419A2240DB
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
      honeypotProbe: 'HoneypotProbe',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      honeypotProbe: CreateHoneypotProbeResponseBodyHoneypotProbe,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.honeypotProbe && typeof (this.honeypotProbe as any).validate === 'function') {
      (this.honeypotProbe as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

