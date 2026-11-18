// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTairAIGatewayPluginSwitchResponseBodyParametersParameters extends $dara.Model {
  parameterName?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterName: 'string',
      parameterValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTairAIGatewayPluginSwitchResponseBodyParameters extends $dara.Model {
  parameters?: DescribeTairAIGatewayPluginSwitchResponseBodyParametersParameters[];
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'array', 'itemType': DescribeTairAIGatewayPluginSwitchResponseBodyParametersParameters },
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTairAIGatewayPluginSwitchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID, which is globally unique.
   * 
   * @example
   * tg-bp1zxszhcgatnx****
   */
  instanceId?: string;
  parameters?: DescribeTairAIGatewayPluginSwitchResponseBodyParameters;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BBC1E3D6-7C88-4DF5-9A3D-0DB1E6D9****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries for the plug-in switch.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      parameters: 'Parameters',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      parameters: DescribeTairAIGatewayPluginSwitchResponseBodyParameters,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

