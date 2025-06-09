// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MLServiceParamModel } from "./MlserviceParamModel";
import { MLServiceParamResource } from "./MlserviceParamResource";


export class MLServiceParam extends $dara.Model {
  /**
   * @example
   * 某某服务
   */
  description?: string;
  model?: MLServiceParamModel;
  /**
   * @example
   * service_name
   */
  name?: string;
  resource?: MLServiceParamResource;
  /**
   * @example
   * sls_builtin
   */
  serviceType?: string;
  /**
   * @example
   * running
   */
  status?: string;
  /**
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

