// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLogstashRequestNodeSpec extends $dara.Model {
  /**
   * @remarks
   * The disk size. Unit: GB.
   * 
   * @example
   * 20
   */
  disk?: number;
  /**
   * @remarks
   * The disk type. Valid values:
   * - cloud_efficiency: ultra cloud disk
   * - cloud_ssd: SSD cloud disk.
   * 
   * @example
   * cloud_efficiency
   */
  diskType?: string;
  /**
   * @remarks
   * The specification information. For more information, see [Product specifications](https://help.aliyun.com/document_detail/271718.html).
   * 
   * @example
   * elasticsearch.sn1ne.large
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      disk: 'disk',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: 'number',
      diskType: 'string',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLogstashRequest extends $dara.Model {
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 3
   */
  nodeAmount?: number;
  /**
   * @remarks
   * The node specifications.
   */
  nodeSpec?: UpdateLogstashRequestNodeSpec;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      nodeAmount: 'nodeAmount',
      nodeSpec: 'nodeSpec',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeAmount: 'number',
      nodeSpec: UpdateLogstashRequestNodeSpec,
      clientToken: 'string',
    };
  }

  validate() {
    if(this.nodeSpec && typeof (this.nodeSpec as any).validate === 'function') {
      (this.nodeSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

