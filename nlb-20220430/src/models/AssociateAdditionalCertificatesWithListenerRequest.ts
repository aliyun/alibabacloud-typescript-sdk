// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateAdditionalCertificatesWithListenerRequest extends $dara.Model {
  /**
   * @remarks
   * The list of additional certificates. You can associate up to 15 additional certificates with a listener in a single call.
   * 
   * This parameter is required.
   */
  additionalCertificateIds?: string[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate a value for this parameter on your client to ensure that the value is unique across different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck this request. Valid values:
   * - **true**: sends a check request and does not add the additional certificates to the TCPSSL listener. The system checks whether the required parameters are specified, the request format is valid, and the service limits are met. If the request fails the check, the system returns an error. If the request passes the check, the system returns the error code `DryRunOperation`.
   * - **false** (default): sends a standard request. If the request passes the check, the system returns an HTTP 2xx status code and performs the operation.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the listener. This operation only supports TCPSSL listener IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * lsn-bpn0kn908w4nbw****@80
   */
  listenerId?: string;
  /**
   * @remarks
   * The ID of the region where the Network Load Balancer (NLB) instance is deployed. 
   * 
   * You can invoke the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query region IDs.
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

