// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of concurrent sessions. The value must be a non-negative integer and cannot exceed the current available concurrency quota.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  concurrency?: number;
  /**
   * @remarks
   * The description of the scenario. The description can be up to 100 characters in length.
   * 
   * @example
   * This is a test scenario
   */
  description?: string;
  /**
   * @remarks
   * The name of the scenario.
   * 
   * This parameter is required.
   * 
   * @example
   * Test scenario
   */
  name?: string;
  /**
   * @remarks
   * The parameter settings of the natural language understanding (NLU) service, represented as a JSON character string. The parameters correspond to the type of NLU service used.
   * 
   * @example
   * {"agentKey":"20791f5f886b4826b3d9b676a029c33d","agentId":"1340201","isCCCAgent":false,"agentName":"Cloud Chatbot Business Workspace 1","agentLlm":true}
   */
  nluServiceParamsJson?: string;
  /**
   * @remarks
   * The instance ID of the integration source. When `UnionSource` is set to `CCC`, specify the ID of the Cloud Call Center instance to be associated.
   * 
   * @example
   * demo-lctms
   */
  unionInstanceId?: string;
  /**
   * @remarks
   * The integration source of the intelligent navigation. When you integrate with Cloud Call Center, set the value to `CCC` and specify the associated Cloud Call Center instance by using `UnionInstanceId`.
   * 
   * @example
   * CCC
   */
  unionSource?: string;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'Concurrency',
      description: 'Description',
      name: 'Name',
      nluServiceParamsJson: 'NluServiceParamsJson',
      unionInstanceId: 'UnionInstanceId',
      unionSource: 'UnionSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'number',
      description: 'string',
      name: 'string',
      nluServiceParamsJson: 'string',
      unionInstanceId: 'string',
      unionSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

