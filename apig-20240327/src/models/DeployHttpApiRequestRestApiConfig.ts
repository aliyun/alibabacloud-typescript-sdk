// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeployHttpApiRequestRestApiConfigEnvironment } from "./DeployHttpApiRequestRestApiConfigEnvironment";


export class DeployHttpApiRequestRestApiConfig extends $dara.Model {
  /**
   * @remarks
   * Publication description.
   * 
   * @example
   * 用户服务API发布。
   */
  description?: string;
  /**
   * @remarks
   * Publication environment configuration.
   */
  environment?: DeployHttpApiRequestRestApiConfigEnvironment;
  gatewayId?: string;
  operationIds?: string[];
  /**
   * @remarks
   * Historical version number. If this field is specified, the publication information will be based on the historical version information.
   * 
   * @example
   * apr-xxx
   */
  revisionId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      environment: 'environment',
      gatewayId: 'gatewayId',
      operationIds: 'operationIds',
      revisionId: 'revisionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      environment: DeployHttpApiRequestRestApiConfigEnvironment,
      gatewayId: 'string',
      operationIds: { 'type': 'array', 'itemType': 'string' },
      revisionId: 'string',
    };
  }

  validate() {
    if(this.environment && typeof (this.environment as any).validate === 'function') {
      (this.environment as any).validate();
    }
    if(Array.isArray(this.operationIds)) {
      $dara.Model.validateArray(this.operationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

