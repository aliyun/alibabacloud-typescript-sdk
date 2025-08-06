// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AssociateAnycastEipAddressRequestPopLocations extends $dara.Model {
  /**
   * @remarks
   * The information about the access points in associated access areas when you associate an Anycast EIP with an endpoint.
   * 
   * If this is your first time to associate an Anycast EIP with an endpoint, ignore this parameter. The system automatically associates all access areas.
   * 
   * You can call the [DescribeAnycastPopLocations](https://help.aliyun.com/document_detail/171938.html) operation to query information about access points in supported access areas.
   * 
   * @example
   * us-west-1-pop
   */
  popLocation?: string;
  static names(): { [key: string]: string } {
    return {
      popLocation: 'PopLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      popLocation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAnycastEipAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Anycast EIP.
   * 
   * This parameter is required.
   * 
   * @example
   * aeip-bp1ix34fralt4ykf3****
   */
  anycastId?: string;
  /**
   * @remarks
   * The association mode. Valid values:
   * 
   * *   **Default**: the default mode. In this mode, the endpoint to be associated serves as the default origin server.
   * *   **Normal**: the standard mode. In this mode, the endpoint to be associated serves as a standard origin server.
   * 
   * > You can associate endpoints in multiple regions with an Anycast EIP. However, only one endpoint can serve as the default origin server. Others serve as standard origin servers. If you do not specify or add an access point, requests are forwarded to the default origin server.\\
   * 
   * 
   * *   If this is your first time to associate an Anycast EIP with an endpoint, set the value to **Default**.
   * *   If not, you can also set the value to **Default**, which specifies a new default origin server. In this case, the previous origin server functions as a standard origin server.
   * 
   * @example
   * Default
   */
  associationMode?: string;
  /**
   * @remarks
   * The ID of the endpoint with which you want to associate the Anycast EIP.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-d7oxbixhxv1uupnon****
   */
  bindInstanceId?: string;
  /**
   * @remarks
   * The ID of the region where the endpoint is deployed.
   * 
   * You can associate Anycast EIPs only with endpoints in specific regions. You can call the [DescribeAnycastServerRegions](https://help.aliyun.com/document_detail/171939.html) operation to query the region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * us-west-1
   */
  bindInstanceRegionId?: string;
  /**
   * @remarks
   * The type of endpoint with which you want to associate the Anycast EIP. Valid values:
   * 
   * *   **SlbInstance**: internal-facing Server Load Balancer (SLB) instance that is deployed in a virtual private cloud (VPC)
   * *   **NetworkInterface**: elastic network interface (ENI)
   * 
   * This parameter is required.
   * 
   * @example
   * SlbInstance
   */
  bindInstanceType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**(default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The information about the access points in associated access areas when you associate an Anycast EIP with an endpoint.
   * 
   * If this is your first time to associate an Anycast EIP with an endpoint, ignore this parameter. The system automatically associates all access areas.
   * 
   * You can call the [DescribeAnycastPopLocations](https://help.aliyun.com/document_detail/171938.html) operation to query information about access points in supported access areas.
   */
  popLocations?: AssociateAnycastEipAddressRequestPopLocations[];
  /**
   * @remarks
   * The secondary private IP address of the ENI with which you want to associate the Anycast EIP.
   * 
   * This parameter is valid only when you set **BindInstanceType** to **NetworkInterface**. If you do not set this parameter, the primary private IP address of the ENI is used.
   * 
   * @example
   * 192.168.XX.XX
   */
  privateIpAddress?: string;
  static names(): { [key: string]: string } {
    return {
      anycastId: 'AnycastId',
      associationMode: 'AssociationMode',
      bindInstanceId: 'BindInstanceId',
      bindInstanceRegionId: 'BindInstanceRegionId',
      bindInstanceType: 'BindInstanceType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      popLocations: 'PopLocations',
      privateIpAddress: 'PrivateIpAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anycastId: 'string',
      associationMode: 'string',
      bindInstanceId: 'string',
      bindInstanceRegionId: 'string',
      bindInstanceType: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      popLocations: { 'type': 'array', 'itemType': AssociateAnycastEipAddressRequestPopLocations },
      privateIpAddress: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.popLocations)) {
      $dara.Model.validateArray(this.popLocations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

