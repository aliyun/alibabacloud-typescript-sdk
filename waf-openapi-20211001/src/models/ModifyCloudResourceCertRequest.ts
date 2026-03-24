// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCloudResourceCertRequestCertificates extends $dara.Model {
  /**
   * @remarks
   * The type of the certificate for the HTTPS protocol. Valid values:
   * 
   * - **default**: the default certificate.
   * 
   * - **extension**: the additional certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  appliedType?: string;
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * This parameter is required.
   * 
   * @example
   * 232***-cn-hangzhou
   */
  certificateId?: string;
  static names(): { [key: string]: string } {
    return {
      appliedType: 'AppliedType',
      certificateId: 'CertificateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedType: 'string',
      certificateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCloudResourceCertRequest extends $dara.Model {
  /**
   * @remarks
   * The list of certificates.
   * 
   * > Enter all certificate IDs. This includes the default certificate and all additional certificates. After you submit the request, WAF compares the submitted IDs with the existing ones. WAF adds new certificates and deletes certificates that are not in your list. Deleting a certificate may affect related services.
   * 
   * This parameter is required.
   */
  certificates?: ModifyCloudResourceCertRequestCertificates[];
  /**
   * @remarks
   * The ID of the resource that is added to WAF. WAF automatically generates this ID when you add the resource in cloud native mode.
   * 
   * > Call the [CreateCloudResource](https://help.aliyun.com/document_detail/2839876.html) operation to add a resource. Then, view the resource ID in the response.
   * 
   * @example
   * lb-bp*********k5uj2p-443-clb7
   */
  cloudResourceId?: string;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * > Call the [DescribeInstance](https://help.aliyun.com/document_detail/433756.html) operation to query the ID of the WAF instance.
   * 
   * This parameter is required.
   * 
   * @example
   * waf_v2_public_cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * The port of the cloud product that is added to WAF.
   * 
   * @example
   * 443
   * 
   * @deprecated
   */
  port?: number;
  /**
   * @remarks
   * The region where the WAF instance resides. Valid values:
   * 
   * - **cn-hangzhou**: the Chinese mainland.
   * 
   * - **ap-southeast-1**: outside the Chinese mainland.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the cloud product instance.
   * 
   * @example
   * lb-bp1*****jqnnqk5uj2p
   * 
   * @deprecated
   */
  resourceInstanceId?: string;
  /**
   * @remarks
   * The type of the cloud product. Valid values:
   * 
   * - **ecs**: Elastic Compute Service (ECS).
   * 
   * - **clb4**: Layer 4 Classic Load Balancer (CLB).
   * 
   * - **nlb**: Network Load Balancer (NLB).
   * 
   * @example
   * clb4
   * 
   * @deprecated
   */
  resourceProduct?: string;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      cloudResourceId: 'CloudResourceId',
      instanceId: 'InstanceId',
      port: 'Port',
      regionId: 'RegionId',
      resourceInstanceId: 'ResourceInstanceId',
      resourceProduct: 'ResourceProduct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: { 'type': 'array', 'itemType': ModifyCloudResourceCertRequestCertificates },
      cloudResourceId: 'string',
      instanceId: 'string',
      port: 'number',
      regionId: 'string',
      resourceInstanceId: 'string',
      resourceProduct: 'string',
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

