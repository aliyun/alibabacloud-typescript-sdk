// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RecipeSpec } from "./RecipeSpec";


export class RecipeResource extends $dara.Model {
  /**
   * @remarks
   * The resource pool type. Valid values: train, eval, and inference. If left empty, the storage layer uses the default value based on the associated slot. For training child tables, TrainResource must be set to train and InferenceResource must be set to inference. For evaluation child tables, the resource must be set to eval. Cross-type sharing is not allowed.
   * 
   * @example
   * train
   */
  resourceType?: string;
  /**
   * @remarks
   * The JSON array of resource specifications. It uses the CustomJob resource shape (flat pod_count, ecs_spec, cpu, memory, gpu, gpu_type, shared_memory, and quota_id). It is required and passed through as-is. Currently, the path that starts an RLJob from a Recipe only consumes a single train specification and a single quota, and does not support ecs_spec. Support for multiple specifications, multiple quotas, and ecs_spec will be available when the RLJob side enables these features.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"PodCount":1,"CPU":"4","Memory":"8Gi","GPU":"1","GPUType":"A100","QuotaId":"quotag2uo09dyp40"}]
   */
  specs?: RecipeSpec[];
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      specs: 'Specs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      specs: { 'type': 'array', 'itemType': RecipeSpec },
    };
  }

  validate() {
    if(Array.isArray(this.specs)) {
      $dara.Model.validateArray(this.specs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

