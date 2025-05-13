// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateInstanceResponseBodyResultKibanaConfiguration } from "./UpdateInstanceResponseBodyResultKibanaConfiguration";
import { UpdateInstanceResponseBodyResultMasterConfiguration } from "./UpdateInstanceResponseBodyResultMasterConfiguration";
import { UpdateInstanceResponseBodyResultNodeSpec } from "./UpdateInstanceResponseBodyResultNodeSpec";


export class UpdateInstanceResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The private domain name of the instance.
   * 
   * @example
   * 2018-07-13T03:58:07.253Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The configuration of data nodes.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * es-cn-abc.elasticsearch.aliyuncs.com
   */
  domain?: string;
  /**
   * @remarks
   * The node specifications.
   * 
   * @example
   * 5.5.3_with_X-Pack
   */
  esVersion?: string;
  /**
   * @remarks
   * The storage space of the node. Unit: GB.
   * 
   * @example
   * es-cn-abc
   */
  instanceId?: string;
  /**
   * @remarks
   * The size of the node storage space.
   */
  kibanaConfiguration?: UpdateInstanceResponseBodyResultKibanaConfiguration;
  /**
   * @remarks
   * The storage space of the node. Unit: GB.
   */
  masterConfiguration?: UpdateInstanceResponseBodyResultMasterConfiguration;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   prepaid: subscription
   * *   postpaid: pay-as-you-go
   * 
   * @example
   * 2
   */
  nodeAmount?: number;
  /**
   * @remarks
   * The storage type of the node. Valid values:
   * 
   * *   cloud_ssd: standard SSD
   * *   cloud_efficiency: ultra disk
   */
  nodeSpec?: UpdateInstanceResponseBodyResultNodeSpec;
  /**
   * @remarks
   * The edition of the dedicated KMS instance.
   * 
   * @example
   * postpaid
   */
  paymentType?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * active
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      description: 'description',
      domain: 'domain',
      esVersion: 'esVersion',
      instanceId: 'instanceId',
      kibanaConfiguration: 'kibanaConfiguration',
      masterConfiguration: 'masterConfiguration',
      nodeAmount: 'nodeAmount',
      nodeSpec: 'nodeSpec',
      paymentType: 'paymentType',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      domain: 'string',
      esVersion: 'string',
      instanceId: 'string',
      kibanaConfiguration: UpdateInstanceResponseBodyResultKibanaConfiguration,
      masterConfiguration: UpdateInstanceResponseBodyResultMasterConfiguration,
      nodeAmount: 'number',
      nodeSpec: UpdateInstanceResponseBodyResultNodeSpec,
      paymentType: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.kibanaConfiguration && typeof (this.kibanaConfiguration as any).validate === 'function') {
      (this.kibanaConfiguration as any).validate();
    }
    if(this.masterConfiguration && typeof (this.masterConfiguration as any).validate === 'function') {
      (this.masterConfiguration as any).validate();
    }
    if(this.nodeSpec && typeof (this.nodeSpec as any).validate === 'function') {
      (this.nodeSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

