// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFlowLogAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the token on your client. Make sure that the token is unique across different requests. The client token supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-00****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the flow log. The description can be empty or 0 to 256 characters in length.
   * 
   * @example
   * myFlowlog
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request. Valid values:
   * 
   * - **true**: sends a dry run request. No EPS resource is modified.
   * 
   * - **false**: sends a normal request. This is the default value.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The instance ID of the Express Connect Router (ECR).
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-fu8rszhgv7623c****
   */
  ecrId?: string;
  /**
   * @remarks
   * The instance ID of the flow log instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-flog-m5evbtbpt****
   */
  flowLogId?: string;
  /**
   * @remarks
   * The new name of the flow log. The name must be 0 to 128 characters in length.
   * 
   * @example
   * myFlowlog
   */
  flowLogName?: string;
  /**
   * @remarks
   * The duration of the capture window for the flow log to capture traffic. Unit: seconds. Valid values:
   * 
   * - **60** 
   * - **600**
   * 
   * Default value: **600**.
   * 
   * @example
   * 600
   */
  interval?: number;
  /**
   * @remarks
   * The sampling rate. Valid values:
   * 
   * - **1:4096**
   * - **1:2048**
   * - **1:1024**
   * 
   * Default value: **1:4096**.
   * 
   * @example
   * 1:4096
   */
  samplingRate?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      ecrId: 'EcrId',
      flowLogId: 'FlowLogId',
      flowLogName: 'FlowLogName',
      interval: 'Interval',
      samplingRate: 'SamplingRate',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      ecrId: 'string',
      flowLogId: 'string',
      flowLogName: 'string',
      interval: 'number',
      samplingRate: 'string',
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

