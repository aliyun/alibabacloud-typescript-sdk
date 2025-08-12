// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateAdditionalCertificatesWithListenerRequest extends $dara.Model {
  /**
   * @remarks
   * The additional certificates. You can associate up to 15 additional certificates with a listener in each call.
   * 
   * This parameter is required.
   */
  additionalCertificateIds?: string[];
  /**
   * @remarks
   * The client token used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token. Ensure that the token is unique among different requests. Only ASCII characters are allowed.
   * 
   * >  If you do not set this parameter, the value of **RequestId** is used.**** The value of **RequestId** is different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * *   **true**: validates the request without performing the operation. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the validation, the corresponding error message is returned. If the request passes the validation, the `DryRunOperation` error code is returned.
   * *   **false** (default): validates the request and performs the operation. If the request passes the validation, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The listener ID. Only TCPSSL listener IDs are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * lsn-bpn0kn908w4nbw****@80
   */
  listenerId?: string;
  /**
   * @remarks
   * The ID of the region where the NLB instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalCertificateIds: 'AdditionalCertificateIds',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalCertificateIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.additionalCertificateIds)) {
      $dara.Model.validateArray(this.additionalCertificateIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

