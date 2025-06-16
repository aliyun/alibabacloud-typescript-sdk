// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcAttributeResponseBodyAssociatedPropagationSourcesAssociatedPropagationSources extends $dara.Model {
  /**
   * @remarks
   * Indicates whether routes are advertised to the VPC.
   * 
   * @example
   * true
   */
  routePropagated?: boolean;
  /**
   * @remarks
   * The instance ID of the source.
   * 
   * @example
   * cen-dc4vwznpwbobrl****
   */
  sourceInstanceId?: string;
  /**
   * @remarks
   * The account ID of the source.
   * 
   * @example
   * 153980532164****
   */
  sourceOwnerId?: number;
  /**
   * @remarks
   * The source type.
   * 
   * *   **CEN**
   * *   **VPN**
   * *   **TR**
   * *   **ECR**
   * 
   * @example
   * CEN
   */
  sourceType?: string;
  /**
   * @remarks
   * The binding status.
   * 
   * *   **Attaching**
   * *   **Attached**
   * *   **Detaching**
   * 
   * @example
   * Attaching
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      routePropagated: 'RoutePropagated',
      sourceInstanceId: 'SourceInstanceId',
      sourceOwnerId: 'SourceOwnerId',
      sourceType: 'SourceType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routePropagated: 'boolean',
      sourceInstanceId: 'string',
      sourceOwnerId: 'number',
      sourceType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

