// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExternalCACertificateShrinkRequestTags extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExternalCACertificateShrinkRequest extends $dara.Model {
  apiPassthroughShrink?: string;
  /**
   * @example
   * -----BEGIN CERTIFICATE REQUEST-----
   * MIIBczCCARgCAQAwgYoxFDASBgNVBAMMC2FsaXl1bi50ZXN0MQ0wCwYDVQQ
   * ...
   * vbIgMQIhAKHDWD6/WAMbtezAt4bysJ/BZIDz1jPWuUR5GV4TJ/mS
   * -----END CERTIFICATE REQUEST-----
   */
  csr?: string;
  /**
   * @example
   * cas_deposit-cn-1234abcd
   */
  instanceId?: string;
  resourceGroupId?: string;
  tags?: CreateExternalCACertificateShrinkRequestTags[];
  /**
   * @example
   * 10y
   */
  validity?: string;
  static names(): { [key: string]: string } {
    return {
      apiPassthroughShrink: 'ApiPassthrough',
      csr: 'Csr',
      instanceId: 'InstanceId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      validity: 'Validity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiPassthroughShrink: 'string',
      csr: 'string',
      instanceId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': CreateExternalCACertificateShrinkRequestTags },
      validity: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

