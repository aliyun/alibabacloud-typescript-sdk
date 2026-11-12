// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The client token used to ensure the idempotence of the request.
   * 
   * @example
   * 5db780a0-9d3e-4f35-a84a-xxxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request.
   * 
   * - true: sends a precheck request without performing the actual operation. If the precheck fails, the corresponding error is returned. If the precheck succeeds, the error code DryRunOperation is returned.
   * 
   * - false: sends a normal request. This is the default value.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The type of the child service to update. Note: This parameter takes effect only for aggregated services.
   * 
   * @example
   * LLMPrefill
   */
  memberToUpdate?: string;
  /**
   * @remarks
   * The update type of the service. Both merge and replace modes are supported. If this parameter is not specified, the merge mode is used by default.
   * 
   * - merge: the merge mode. If the original service configuration JSON is
   * `{"a":"b"}` and the updated configuration is `{"c":"d"}`, the final configuration in merge mode is `{"a":"b","c":"d"}`.
   * - replace: the replace mode. If the original service configuration JSON is
   * `{"a":"b"}` and the updated configuration is `{"c":"d"}`, the final configuration in replace mode is `{"c":"d"}`.
   * 
   * @example
   * merge
   */
  updateType?: string;
  /**
   * @remarks
   * The updated configuration. For more information about parameter settings, see [CreateService](https://help.aliyun.com/document_detail/412086.html).
   * 
   * @example
   * {
   *       "name": "foo",
   *       "model_path": "http://path/to/model.tar.gz",
   *       "processor": "tensorflow_cpu",
   *       "metadata": {
   *             "instance": 2,
   *             "memory": 7000,
   *             "cpu": 4
   *       }
   * }
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      memberToUpdate: 'MemberToUpdate',
      updateType: 'UpdateType',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      memberToUpdate: 'string',
      updateType: 'string',
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

