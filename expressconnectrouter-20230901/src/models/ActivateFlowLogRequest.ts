// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActivateFlowLogRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the value from your client to ensure that the value is unique among different requests. The ClientToken parameter supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId of each API request may be different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether it is a dry run for this request. Valid values:
   * - **true**: sends a check request without modifying any EPS resource.
   * - **false** (default): sends a normal request.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The Express Connect Router (ECR) instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-mezk2idmsd0vx2****
   */
  ecrId?: string;
  /**
   * @remarks
   * The flow log instance ID.
   * > The flow log must be in the DEACTIVATE state. After you invoke the DeactivateFlowLog operation, the flow log enters the DEACTIVATING transitional state. You must invoke the DescribeFlowLogs operation for polling and wait until the state changes to DEACTIVATE before you invoke this operation.
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-flog-m5evbtbpt****
   */
  flowLogId?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      flowLogId: 'FlowLogId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      flowLogId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

