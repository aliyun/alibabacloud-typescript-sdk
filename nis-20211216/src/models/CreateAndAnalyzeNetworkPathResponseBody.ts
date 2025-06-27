// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAndAnalyzeNetworkPathResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the task for analyzing network reachability that you initiated.
   * 
   * @example
   * nra-dfe9e53d2b524568****
   */
  networkReachableAnalysisId?: string;
  /**
   * @remarks
   * The protocol type.
   * 
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D5E98683-355B-5867-8D3D-A24755F6895B
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the source resource.
   * 
   * @example
   * i-uf62y8khhbkbdrp6****
   */
  sourceId?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  sourceIpAddress?: string;
  /**
   * @remarks
   * The source port.
   * 
   * @example
   * 0
   */
  sourcePort?: string;
  /**
   * @remarks
   * The type of the source resource.
   * 
   * @example
   * ecs
   */
  sourceType?: string;
  /**
   * @remarks
   * The ID of the destination resource.
   * 
   * @example
   * i-m5eactvw7wtpktv5****
   */
  targetId?: string;
  /**
   * @remarks
   * The destination IP address.
   * 
   * @example
   * 172.50.XX.XX
   */
  targetIpAddress?: string;
  /**
   * @remarks
   * The destination port.
   * 
   * @example
   * 80
   */
  targetPort?: string;
  /**
   * @remarks
   * The type of the destination resource.
   * 
   * @example
   * ecs
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      networkReachableAnalysisId: 'NetworkReachableAnalysisId',
      protocol: 'Protocol',
      requestId: 'RequestId',
      sourceId: 'SourceId',
      sourceIpAddress: 'SourceIpAddress',
      sourcePort: 'SourcePort',
      sourceType: 'SourceType',
      targetId: 'TargetId',
      targetIpAddress: 'TargetIpAddress',
      targetPort: 'TargetPort',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkReachableAnalysisId: 'string',
      protocol: 'string',
      requestId: 'string',
      sourceId: 'string',
      sourceIpAddress: 'string',
      sourcePort: 'string',
      sourceType: 'string',
      targetId: 'string',
      targetIpAddress: 'string',
      targetPort: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

