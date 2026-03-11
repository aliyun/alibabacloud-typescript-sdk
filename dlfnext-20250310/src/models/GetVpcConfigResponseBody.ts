// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVpcConfigResponseBodyTrustedVpcs extends $dara.Model {
  /**
   * @example
   * 1744970111419
   */
  createdAt?: number;
  extendedOptions?: { [key: string]: string };
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-uf67xxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      extendedOptions: 'extendedOptions',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      extendedOptions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      vpcId: 'string',
    };
  }

  validate() {
    if(this.extendedOptions) {
      $dara.Model.validateMap(this.extendedOptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcConfigResponseBody extends $dara.Model {
  trustedVpcs?: GetVpcConfigResponseBodyTrustedVpcs[];
  static names(): { [key: string]: string } {
    return {
      trustedVpcs: 'trustedVpcs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trustedVpcs: { 'type': 'array', 'itemType': GetVpcConfigResponseBodyTrustedVpcs },
    };
  }

  validate() {
    if(Array.isArray(this.trustedVpcs)) {
      $dara.Model.validateArray(this.trustedVpcs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

