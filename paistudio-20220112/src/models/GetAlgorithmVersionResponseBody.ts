// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlgorithmSpec } from "./AlgorithmSpec";


export class GetAlgorithmVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The algorithm ID.
   * 
   * @example
   * algo-xsldfvu1334
   */
  algorithmId?: string;
  /**
   * @remarks
   * The algorithm name.
   * 
   * @example
   * llm_training
   */
  algorithmName?: string;
  /**
   * @remarks
   * The algorithm provider.
   * 
   * @example
   * pai
   */
  algorithmProvider?: string;
  /**
   * @remarks
   * The algorithm details.
   */
  algorithmSpec?: AlgorithmSpec;
  /**
   * @remarks
   * The algorithm version.
   * 
   * @example
   * v0.0.1
   */
  algorithmVersion?: string;
  /**
   * @remarks
   * The time when the algorithm was created. The time follows the ISO 8601 standard in UTC.
   * 
   * @example
   * 2024-07-10T11:49:47Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the algorithm was last updated. The time follows the ISO 8601 standard in UTC.
   * 
   * @example
   * 2024-07-10T11:49:47Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The ID of the tenant to whom the algorithm belongs.
   * 
   * @example
   * 123456789
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the user to whom the algorithm belongs.
   * 
   * @example
   * 123456789
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmId: 'AlgorithmId',
      algorithmName: 'AlgorithmName',
      algorithmProvider: 'AlgorithmProvider',
      algorithmSpec: 'AlgorithmSpec',
      algorithmVersion: 'AlgorithmVersion',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      tenantId: 'TenantId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmId: 'string',
      algorithmName: 'string',
      algorithmProvider: 'string',
      algorithmSpec: AlgorithmSpec,
      algorithmVersion: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      tenantId: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.algorithmSpec && typeof (this.algorithmSpec as any).validate === 'function') {
      (this.algorithmSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

