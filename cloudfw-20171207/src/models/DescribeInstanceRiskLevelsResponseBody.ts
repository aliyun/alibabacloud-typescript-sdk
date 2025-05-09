// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceRiskLevelsResponseBodyInstanceRisks } from "./DescribeInstanceRiskLevelsResponseBodyInstanceRisks";


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

