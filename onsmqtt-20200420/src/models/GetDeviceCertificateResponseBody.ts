// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceCertificateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The SN serial number of the CA certificate to which the device certificate belongs, used to uniquely identify a CA certificate.
   * 
   * @example
   * 00f26900ba87******
   */
  caSn?: string;
  /**
   * @remarks
   * Content of the device certificate.
   * 
   *  represents a new line.
   * 
   * @example
   * -----BEGIN DEVICECERTIFICATE-----\\nMIIDuzCCAqdGVzdC5jbi1xaW5n******\\n-----END DEVICECERTIFICATE-----
   */
  deviceContent?: string;
  /**
   * @remarks
   * Name of the device certificate.
   * 
   * @example
   * mqtt_device
   */
  deviceName?: string;
  /**
   * @remarks
   * The SN serial number of the device certificate, used to uniquely identify a device certificate.
   * 
   * @example
   * 356217374433******
   */
  deviceSn?: string;
  /**
   * @remarks
   * The status of the device certificate. The values are as follows:
   * - **0**: Indicates that the certificate is in an inactive state. - **1**: Indicates that the certificate is in an active state.
   * > After the device certificate is registered, it is in an active state by default.
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The start time when the device certificate becomes effective. The format is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1654137303000
   */
  validBegin?: string;
  /**
   * @remarks
   * The end time when the device certificate becomes effective. The format is a Unix timestamp in milliseconds.
   * 
   * @example
   * 1969497303000
   */
  validEnd?: string;
  static names(): { [key: string]: string } {
    return {
      caSn: 'CaSn',
      deviceContent: 'DeviceContent',
      deviceName: 'DeviceName',
      deviceSn: 'DeviceSn',
      status: 'Status',
      validBegin: 'ValidBegin',
      validEnd: 'ValidEnd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caSn: 'string',
      deviceContent: 'string',
      deviceName: 'string',
      deviceSn: 'string',
      status: 'string',
      validBegin: 'string',
      validEnd: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeviceCertificateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Certificate details.
   */
  data?: GetDeviceCertificateResponseBodyData;
  /**
   * @remarks
   * Public parameters, each request ID is unique and can be used for troubleshooting and problem localization.
   * 
   * @example
   * 020F6A43-19E6-4B6E-B846-44EB31DF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDeviceCertificateResponseBodyData,
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

