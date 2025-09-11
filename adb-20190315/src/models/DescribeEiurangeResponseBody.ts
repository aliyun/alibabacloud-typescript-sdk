// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEIURangeResponseBodyEIUInfo extends $dara.Model {
  defaultReservedNodeSize?: string;
  /**
   * @remarks
   * The suggested value for the number of EIUs.
   * 
   * @example
   * 2
   */
  defaultValue?: string;
  /**
   * @remarks
   * The queried range for the number of EIUs.
   */
  EIURange?: number[];
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * none
   */
  maxValue?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * none
   */
  minValue?: string;
  reservedNodeSizeRange?: string[];
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * none
   */
  step?: string;
  /**
   * @remarks
   * A reserved parameter.
   */
  storageResourceRange?: string[];
  static names(): { [key: string]: string } {
    return {
      defaultReservedNodeSize: 'DefaultReservedNodeSize',
      defaultValue: 'DefaultValue',
      EIURange: 'EIURange',
      maxValue: 'MaxValue',
      minValue: 'MinValue',
      reservedNodeSizeRange: 'ReservedNodeSizeRange',
      step: 'Step',
      storageResourceRange: 'StorageResourceRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultReservedNodeSize: 'string',
      defaultValue: 'string',
      EIURange: { 'type': 'array', 'itemType': 'number' },
      maxValue: 'string',
      minValue: 'string',
      reservedNodeSizeRange: { 'type': 'array', 'itemType': 'string' },
      step: 'string',
      storageResourceRange: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.EIURange)) {
      $dara.Model.validateArray(this.EIURange);
    }
    if(Array.isArray(this.reservedNodeSizeRange)) {
      $dara.Model.validateArray(this.reservedNodeSizeRange);
    }
    if(Array.isArray(this.storageResourceRange)) {
      $dara.Model.validateArray(this.storageResourceRange);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEIURangeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried information about the number of EIUs.
   */
  EIUInfo?: DescribeEIURangeResponseBodyEIUInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D65A809F-34CE-4550-9BC1-0ED21ETG380
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      EIUInfo: 'EIUInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      EIUInfo: DescribeEIURangeResponseBodyEIUInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.EIUInfo && typeof (this.EIUInfo as any).validate === 'function') {
      (this.EIUInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

