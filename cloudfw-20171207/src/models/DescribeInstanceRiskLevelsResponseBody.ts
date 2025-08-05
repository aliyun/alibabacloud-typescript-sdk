// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceRiskLevelsResponseBodyInstanceRisksDetails extends $dara.Model {
  /**
   * @remarks
   * The IP addresses of servers.
   * 
   * @example
   * 203.107.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The risk levels. Valid values:
   * 
   * *   **medium**
   * 
   * @example
   * medium
   */
  level?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * ResourceNotProtected
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      level: 'Level',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      level: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRiskLevelsResponseBodyInstanceRisks extends $dara.Model {
  /**
   * @remarks
   * The risk levels of the Elastic Compute Service (ECS) instance.
   */
  details?: DescribeInstanceRiskLevelsResponseBodyInstanceRisksDetails[];
  /**
   * @remarks
   * The instance ID of your Cloud Firewall.
   * 
   * @example
   * vipcloudfw-cn-7mz2fj8nm0u
   */
  instanceId?: string;
  /**
   * @remarks
   * The risk levels. Valid values:
   * 
   * *   **medium**
   * 
   * @example
   * medium
   */
  level?: string;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      instanceId: 'InstanceId',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': DescribeInstanceRiskLevelsResponseBodyInstanceRisksDetails },
      instanceId: 'string',
      level: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRiskLevelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the instances.
   */
  instanceRisks?: DescribeInstanceRiskLevelsResponseBodyInstanceRisks[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9AABB1B7-C81F-5158-9EF9-B2DD5D3DA014
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceRisks: 'InstanceRisks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceRisks: { 'type': 'array', 'itemType': DescribeInstanceRiskLevelsResponseBodyInstanceRisks },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceRisks)) {
      $dara.Model.validateArray(this.instanceRisks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

