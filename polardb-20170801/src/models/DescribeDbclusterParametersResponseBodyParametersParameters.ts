// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterParametersResponseBodyParametersParameters extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the source and current parameters have the same value.
   * 
   * @example
   * true
   */
  isEqual?: string;
  /**
   * @remarks
   * Indicate whether the parameter is a primary parameter of the destination cluster. Valid values:
   * 
   * *   **1**: The parameter is a primary parameter of the destination cluster.
   * *   **0**: The parameter is not a primary parameter of the destination cluster.
   * 
   * @example
   * 1
   */
  isInstancePolarDBKey?: string;
  /**
   * @remarks
   * Indicate whether the parameter is a primary parameter of the source instance. Valid values:
   * 
   * *   **1**: The parameter is a primary parameter of the source instance.
   * *   **0**: The parameter is not a primary parameter of the source instance.
   * 
   * @example
   * 0
   */
  isInstanceRdsKey?: string;
  /**
   * @remarks
   * Indicate whether the parameter is a primary parameter of the destination cluster. Valid values:
   * 
   * *   **1**: The parameter is a primary parameter of the destination cluster.
   * *   **0**: The parameter is not a primary parameter of the destination cluster.
   * 
   * @example
   * 0
   */
  isPolarDBKey?: string;
  /**
   * @remarks
   * Indicate whether the parameter is a primary parameter of the source instance. Valid values:
   * 
   * *   **1**: The parameter is a primary parameter of the source instance.
   * *   **0**: The parameter is not a primary parameter of the source instance.
   * 
   * @example
   * 1
   */
  isRdsKey?: string;
  /**
   * @remarks
   * The description of the parameter of the destination cluster.
   * 
   * @example
   * The server\\"s default character set.
   */
  distParameterDescription?: string;
  /**
   * @remarks
   * The name of the parameter of the destination cluster.
   * 
   * @example
   * character_set_server
   */
  distParameterName?: string;
  /**
   * @remarks
   * The valid values of the parameter of the destination cluster.
   * 
   * @example
   * - utf8
   * - gbk
   */
  distParameterOptional?: string;
  /**
   * @remarks
   * The value of the parameter of the destination cluster.
   * 
   * @example
   * utf8
   */
  distParameterValue?: string;
  /**
   * @remarks
   * The description of the parameter of the source instance.
   * 
   * @example
   * The server\\"s default character set.
   */
  rdsParameterDescription?: string;
  /**
   * @remarks
   * The name of the parameter of the source instance.
   * 
   * @example
   * character_set_server
   */
  rdsParameterName?: string;
  /**
   * @remarks
   * The valid values of the parameter of the source instance.
   * 
   * @example
   * - utf8
   * - gbk
   */
  rdsParameterOptional?: string;
  /**
   * @remarks
   * The value of the parameter of the source instance.
   * 
   * @example
   * utf8
   */
  rdsParameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      isEqual: 'IsEqual',
      isInstancePolarDBKey: 'IsInstancePolarDBKey',
      isInstanceRdsKey: 'IsInstanceRdsKey',
      isPolarDBKey: 'IsPolarDBKey',
      isRdsKey: 'IsRdsKey',
      distParameterDescription: 'distParameterDescription',
      distParameterName: 'distParameterName',
      distParameterOptional: 'distParameterOptional',
      distParameterValue: 'distParameterValue',
      rdsParameterDescription: 'rdsParameterDescription',
      rdsParameterName: 'rdsParameterName',
      rdsParameterOptional: 'rdsParameterOptional',
      rdsParameterValue: 'rdsParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isEqual: 'string',
      isInstancePolarDBKey: 'string',
      isInstanceRdsKey: 'string',
      isPolarDBKey: 'string',
      isRdsKey: 'string',
      distParameterDescription: 'string',
      distParameterName: 'string',
      distParameterOptional: 'string',
      distParameterValue: 'string',
      rdsParameterDescription: 'string',
      rdsParameterName: 'string',
      rdsParameterOptional: 'string',
      rdsParameterValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

