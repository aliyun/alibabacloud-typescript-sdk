// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNatGatewayResponseBodyForwardTableIds extends $dara.Model {
  forwardTableId?: string[];
  static names(): { [key: string]: string } {
    return {
      forwardTableId: 'ForwardTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardTableId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.forwardTableId)) {
      $dara.Model.validateArray(this.forwardTableId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNatGatewayResponseBodyFullNatTableIds extends $dara.Model {
  fullNatTableId?: string[];
  static names(): { [key: string]: string } {
    return {
      fullNatTableId: 'FullNatTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullNatTableId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.fullNatTableId)) {
      $dara.Model.validateArray(this.fullNatTableId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNatGatewayResponseBodySnatTableIds extends $dara.Model {
  snatTableId?: string[];
  static names(): { [key: string]: string } {
    return {
      snatTableId: 'SnatTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snatTableId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.snatTableId)) {
      $dara.Model.validateArray(this.snatTableId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNatGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of DNAT entries.
   */
  forwardTableIds?: CreateNatGatewayResponseBodyForwardTableIds;
  /**
   * @remarks
   * A list of FULLNAT entries.
   */
  fullNatTableIds?: CreateNatGatewayResponseBodyFullNatTableIds;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * @example
   * ngw-112za33e4****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2315DEB7-5E92-423A-91F7-4C1EC9AD97C3
   */
  requestId?: string;
  /**
   * @remarks
   * A list of SNAT entries.
   */
  snatTableIds?: CreateNatGatewayResponseBodySnatTableIds;
  static names(): { [key: string]: string } {
    return {
      forwardTableIds: 'ForwardTableIds',
      fullNatTableIds: 'FullNatTableIds',
      natGatewayId: 'NatGatewayId',
      requestId: 'RequestId',
      snatTableIds: 'SnatTableIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardTableIds: CreateNatGatewayResponseBodyForwardTableIds,
      fullNatTableIds: CreateNatGatewayResponseBodyFullNatTableIds,
      natGatewayId: 'string',
      requestId: 'string',
      snatTableIds: CreateNatGatewayResponseBodySnatTableIds,
    };
  }

  validate() {
    if(this.forwardTableIds && typeof (this.forwardTableIds as any).validate === 'function') {
      (this.forwardTableIds as any).validate();
    }
    if(this.fullNatTableIds && typeof (this.fullNatTableIds as any).validate === 'function') {
      (this.fullNatTableIds as any).validate();
    }
    if(this.snatTableIds && typeof (this.snatTableIds as any).validate === 'function') {
      (this.snatTableIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

