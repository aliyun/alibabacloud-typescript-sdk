// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MLServiceParamModel extends $dara.Model {
  /**
   * @remarks
   * The model resource ID.
   * 
   * @example
   * xxxx
   */
  modelResourceId?: string;
  /**
   * @remarks
   * The model resource type.
   * 
   * @example
   * xxx_type
   */
  modelResourceType?: string;
  static names(): { [key: string]: string } {
    return {
      modelResourceId: 'modelResourceId',
      modelResourceType: 'modelResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelResourceId: 'string',
      modelResourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MLServiceParamResource extends $dara.Model {
  /**
   * @remarks
   * The maximum CPU resource limit.
   * 
   * @example
   * 2
   */
  cpuLimit?: number;
  /**
   * @remarks
   * The required GPU memory size.
   * 
   * @example
   * 20
   */
  gpu?: number;
  /**
   * @remarks
   * The maximum memory resources limit.
   * 
   * @example
   * 64
   */
  memoryLimit?: number;
  /**
   * @remarks
   * The number of microservice replicas.
   * 
   * @example
   * 2
   */
  replica?: number;
  static names(): { [key: string]: string } {
    return {
      cpuLimit: 'cpuLimit',
      gpu: 'gpu',
      memoryLimit: 'memoryLimit',
      replica: 'replica',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuLimit: 'number',
      gpu: 'number',
      memoryLimit: 'number',
      replica: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MLServiceParam extends $dara.Model {
  /**
   * @remarks
   * The microservice description.
   * 
   * @example
   * SampleService
   */
  description?: string;
  /**
   * @remarks
   * The model configuration that the microservice depends on.
   */
  model?: MLServiceParamModel;
  /**
   * @remarks
   * The microservice name.
   * 
   * @example
   * service_name
   */
  name?: string;
  /**
   * @remarks
   * The microservice EPS resource configuration.
   */
  resource?: MLServiceParamResource;
  /**
   * @remarks
   * The microservice type.
   * 
   * @example
   * sls_builtin
   */
  serviceType?: string;
  /**
   * @remarks
   * The microservice status.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The microservice update time.
   * 
   * @example
   * 1695090077
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      model: 'model',
      name: 'name',
      resource: 'resource',
      serviceType: 'serviceType',
      status: 'status',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      model: MLServiceParamModel,
      name: 'string',
      resource: MLServiceParamResource,
      serviceType: 'string',
      status: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

