// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CalculateNatGatewayCapacityUnitsResponseBodyNatGatewayCapacity extends $dara.Model {
  /**
   * @remarks
   * The number of reserved LCUs per hour.
   * 
   * @example
   * 100
   */
  capacityUnits?: number;
  static names(): { [key: string]: string } {
    return {
      capacityUnits: 'CapacityUnits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacityUnits: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalculateNatGatewayCapacityUnitsResponseBodyNatGatewayPerformanceValues extends $dara.Model {
  /**
   * @remarks
   * The bandwidth. Unit: Gbit/s.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The maximum number of new connections per second.
   * 
   * @example
   * 50000
   */
  cps?: number;
  /**
   * @remarks
   * The number of packets. Unit: pps.
   * 
   * @example
   * 160000
   */
  pps?: number;
  /**
   * @remarks
   * The number of sessions.
   * 
   * @example
   * 1000
   */
  sessionCount?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      cps: 'Cps',
      pps: 'Pps',
      sessionCount: 'SessionCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      cps: 'number',
      pps: 'number',
      sessionCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CalculateNatGatewayCapacityUnitsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the calculated equivalent resource reservation CUs.
   */
  natGatewayCapacity?: CalculateNatGatewayCapacityUnitsResponseBodyNatGatewayCapacity;
  /**
   * @remarks
   * The details of the calculated equivalent resource reservation metrics.
   */
  natGatewayPerformanceValues?: CalculateNatGatewayCapacityUnitsResponseBodyNatGatewayPerformanceValues;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DE77A7F3-3B74-41C0-A5BC-CAFD188C28B6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      natGatewayCapacity: 'NatGatewayCapacity',
      natGatewayPerformanceValues: 'NatGatewayPerformanceValues',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natGatewayCapacity: CalculateNatGatewayCapacityUnitsResponseBodyNatGatewayCapacity,
      natGatewayPerformanceValues: CalculateNatGatewayCapacityUnitsResponseBodyNatGatewayPerformanceValues,
      requestId: 'string',
    };
  }

  validate() {
    if(this.natGatewayCapacity && typeof (this.natGatewayCapacity as any).validate === 'function') {
      (this.natGatewayCapacity as any).validate();
    }
    if(this.natGatewayPerformanceValues && typeof (this.natGatewayPerformanceValues as any).validate === 'function') {
      (this.natGatewayPerformanceValues as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

