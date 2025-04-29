// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApiStageVariableRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API group.
   * 
   * This parameter is required.
   * 
   * @example
   * 523e8dc7bbe04613b5b1d726c2a7889d
   */
  groupId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The ID of the runtime environment.
   * 
   * This parameter is required.
   * 
   * @example
   * 6EF60BEC-0242-43AF-BB20-270359FB54A7
   */
  stageId?: string;
  /**
   * @remarks
   * The routing model of the environment.
   * 
   * @example
   * {
   *     "location": "HEAD",
   *     "parameterCatalog": "CUSTOM",
   *     "parameterType": "String",
   *     "serviceParameterName": "TestConstant",
   *     "routeMatchSymbol": "IN",
   *     "routeRules": [
   *         {
   *             "conditionValue": "aaa,bbb",
   *             "resultValue": "apigateway-test.com"
   *         }
   *     ]
   * }
   * 
   * @deprecated
   */
  stageRouteModel?: string;
  /**
   * @remarks
   * Specifies whether routing is supported.
   * 
   * @example
   * true
   */
  supportRoute?: boolean;
  /**
   * @remarks
   * The name of the variable to be added. This parameter is case-sensitive.
   * 
   * This parameter is required.
   * 
   * @example
   * serverName
   */
  variableName?: string;
  /**
   * @remarks
   * The value of the variable.
   * 
   * @example
   * api.domain.com
   */
  variableValue?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageId: 'StageId',
      stageRouteModel: 'StageRouteModel',
      supportRoute: 'SupportRoute',
      variableName: 'VariableName',
      variableValue: 'VariableValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      securityToken: 'string',
      stageId: 'string',
      stageRouteModel: 'string',
      supportRoute: 'boolean',
      variableName: 'string',
      variableValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

