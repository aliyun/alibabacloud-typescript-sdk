// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceRiskNumResponseBodyInstanceRiskNumInstanceItem extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-wz9fdluqx20mp2x7****
   */
  instanceId?: string;
  /**
   * @remarks
   * The UUID of the instance.
   * 
   * @example
   * f2d6e901-1004-4ca8-9dae-53ec04a9****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRiskNumResponseBodyInstanceRiskNumRiskNumEntity extends $dara.Model {
  /**
   * @remarks
   * The number of high-risk alerts.
   * 
   * @example
   * 5
   */
  suspiciousHighCount?: number;
  /**
   * @remarks
   * The number of low-risk alerts.
   * 
   * @example
   * 7
   */
  suspiciousLowCount?: number;
  /**
   * @remarks
   * The number of medium-risk alerts.
   * 
   * @example
   * 6
   */
  suspiciousMediumCount?: number;
  /**
   * @remarks
   * The number of high-risk vulnerabilities.
   * 
   * @example
   * 1
   */
  vulHighCount?: number;
  /**
   * @remarks
   * The number of low-risk vulnerabilities.
   * 
   * @example
   * 3
   */
  vulLowCount?: number;
  /**
   * @remarks
   * The number of medium-risk vulnerabilities.
   * 
   * @example
   * 2
   */
  vulMediumCount?: number;
  /**
   * @remarks
   * The number of weak passwords exposed on the Internet.
   * 
   * @example
   * 4
   */
  weakPassWordCount?: number;
  static names(): { [key: string]: string } {
    return {
      suspiciousHighCount: 'SuspiciousHighCount',
      suspiciousLowCount: 'SuspiciousLowCount',
      suspiciousMediumCount: 'SuspiciousMediumCount',
      vulHighCount: 'VulHighCount',
      vulLowCount: 'VulLowCount',
      vulMediumCount: 'VulMediumCount',
      weakPassWordCount: 'WeakPassWordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      suspiciousHighCount: 'number',
      suspiciousLowCount: 'number',
      suspiciousMediumCount: 'number',
      vulHighCount: 'number',
      vulLowCount: 'number',
      vulMediumCount: 'number',
      weakPassWordCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRiskNumResponseBodyInstanceRiskNum extends $dara.Model {
  /**
   * @remarks
   * The information about the instance.
   */
  instanceItem?: ListInstanceRiskNumResponseBodyInstanceRiskNumInstanceItem;
  /**
   * @remarks
   * The statistics about the risks.
   */
  riskNumEntity?: ListInstanceRiskNumResponseBodyInstanceRiskNumRiskNumEntity;
  static names(): { [key: string]: string } {
    return {
      instanceItem: 'InstanceItem',
      riskNumEntity: 'RiskNumEntity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceItem: ListInstanceRiskNumResponseBodyInstanceRiskNumInstanceItem,
      riskNumEntity: ListInstanceRiskNumResponseBodyInstanceRiskNumRiskNumEntity,
    };
  }

  validate() {
    if(this.instanceItem && typeof (this.instanceItem as any).validate === 'function') {
      (this.instanceItem as any).validate();
    }
    if(this.riskNumEntity && typeof (this.riskNumEntity as any).validate === 'function') {
      (this.riskNumEntity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRiskNumResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the risks in the instance.
   */
  instanceRiskNum?: ListInstanceRiskNumResponseBodyInstanceRiskNum[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 291B49F9-1685-4005-9D34-606B6F78****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceRiskNum: 'InstanceRiskNum',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceRiskNum: { 'type': 'array', 'itemType': ListInstanceRiskNumResponseBodyInstanceRiskNum },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceRiskNum)) {
      $dara.Model.validateArray(this.instanceRiskNum);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

