// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateAdditionalCertificatesWithListenerRequestCertificates extends $dara.Model {
  /**
   * @remarks
   * The domain name for which the certificate takes effect. Each domain name can be bound to only one additional certificate.
   * 
   * You can specify up to 10 domain names at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The certificate ID. Only server certificates are supported.
   * 
   * You can specify up to 10 certificate IDs at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * 6092**-cn-hangzhou
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAdditionalCertificatesWithListenerRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Alibaba Cloud Global Accelerator (GA).
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The list of additional certificates.
   * 
   * You can specify up to 10 certificates at a time.
   * 
   * This parameter is required.
   */
  certificates?: AssociateAdditionalCertificatesWithListenerRequestCertificates[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Generate a parameter value from your client to ensure uniqueness across different requests. ClientToken supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID of the listener. Only HTTPS listeners are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The region ID of the Alibaba Cloud Global Accelerator (GA) instance. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      certificates: 'Certificates',
      clientToken: 'ClientToken',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      certificates: { 'type': 'array', 'itemType': AssociateAdditionalCertificatesWithListenerRequestCertificates },
      clientToken: 'string',
      listenerId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.certificates)) {
      $dara.Model.validateArray(this.certificates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

