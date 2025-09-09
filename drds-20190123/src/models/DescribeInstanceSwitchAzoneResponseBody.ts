// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceSwitchAzoneResponseBodyResultTargetAzones extends $dara.Model {
  targetAzone?: string[];
  static names(): { [key: string]: string } {
    return {
      targetAzone: 'TargetAzone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetAzone: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.targetAzone)) {
      $dara.Model.validateArray(this.targetAzone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchAzoneResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the source azoneId.
   * 
   * @example
   * cn-hangzhou-a
   */
  originAzoneId?: string;
  /**
   * @remarks
   * regionId.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Indicates whether the job can be switched.
   * 
   * @example
   * true
   */
  switchAble?: boolean;
  /**
   * @remarks
   * Target azones.
   */
  targetAzones?: DescribeInstanceSwitchAzoneResponseBodyResultTargetAzones;
  static names(): { [key: string]: string } {
    return {
      originAzoneId: 'OriginAzoneId',
      regionId: 'RegionId',
      switchAble: 'SwitchAble',
      targetAzones: 'TargetAzones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      originAzoneId: 'string',
      regionId: 'string',
      switchAble: 'boolean',
      targetAzones: DescribeInstanceSwitchAzoneResponseBodyResultTargetAzones,
    };
  }

  validate() {
    if(this.targetAzones && typeof (this.targetAzones as any).validate === 'function') {
      (this.targetAzones as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSwitchAzoneResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DSSDF-SEWE-23ERW
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the operation.
   */
  result?: DescribeInstanceSwitchAzoneResponseBodyResult;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeInstanceSwitchAzoneResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

