// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTairAIGatewayParametersResponseBodyParametersParameters extends $dara.Model {
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

export class DescribeTairAIGatewayParametersResponseBodyParameters extends $dara.Model {
  parameters?: DescribeTairAIGatewayParametersResponseBodyParametersParameters[];
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'array', 'itemType': DescribeTairAIGatewayParametersResponseBodyParametersParameters },
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

export class DescribeTairAIGatewayParametersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * tg-bp1zxszhcgatnx****
   */
  instanceId?: string;
  parameters?: DescribeTairAIGatewayParametersResponseBodyParameters;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90B82DB7-FB28-4CC2-ADBF-1F8659F3****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of returned parameters.
   * 
   * @example
   * 2
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
      parameters: DescribeTairAIGatewayParametersResponseBodyParameters,
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

