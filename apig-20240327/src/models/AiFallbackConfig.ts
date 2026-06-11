// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiFallbackConfigServiceConfigs extends $dara.Model {
  /**
   * @remarks
   * The name of the fallback service.
   */
  name?: string;
  /**
   * @remarks
   * Determines whether to pass the original model name to the fallback service. If `true`, the model name from the original request is used. If `false`, the value of `targetModelName` is used instead.
   */
  passThroughModelName?: boolean;
  /**
   * @remarks
   * The unique ID of the fallback service.
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the model to use for the fallback request.
   */
  targetModelName?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      passThroughModelName: 'passThroughModelName',
      serviceId: 'serviceId',
      targetModelName: 'targetModelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      passThroughModelName: 'boolean',
      serviceId: 'string',
      targetModelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AiFallbackConfig extends $dara.Model {
  /**
   * @remarks
   * Determines whether fallback is triggered solely by the upstream service\\"s status code. If `true`, fallback occurs only if the upstream service returns an error code. If `false`, other conditions, such as timeouts, can also trigger the fallback.
   */
  onlyRedirectUpstreamCode?: boolean;
  /**
   * @remarks
   * A list of fallback service configurations.
   */
  serviceConfigs?: AiFallbackConfigServiceConfigs[];
  static names(): { [key: string]: string } {
    return {
      onlyRedirectUpstreamCode: 'onlyRedirectUpstreamCode',
      serviceConfigs: 'serviceConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlyRedirectUpstreamCode: 'boolean',
      serviceConfigs: { 'type': 'array', 'itemType': AiFallbackConfigServiceConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.serviceConfigs)) {
      $dara.Model.validateArray(this.serviceConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

