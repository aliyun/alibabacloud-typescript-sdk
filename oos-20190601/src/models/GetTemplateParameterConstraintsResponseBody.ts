// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateParameterConstraintsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The constraints of the parameters.
   * 
   * @example
   * [
   *     {
   *       "Type": "String",
   *       "AllowedValues": [
   *         "ecs.n1.tiny",
   *         "ecs.r8a.4xlarge",
   *         "ecs.n2.xlarge",
   *         "ecs.c7.2xlarge",
   *         "ecs.c8i.4xlarge",
   *         "ecs.g8i.48xlarge",
   *         "ecs.c8a.4xlarge",
   *         "ecs.i2.4xlarge",
   *         "ecs.r8y.2xlarge"
   *       ],
   *       "AssociationParameterNames": [
   *         "RegionId",
   *         "zoneId"
   *       ],
   *       "ParameterKey": "instanceType"
   *     },
   *     {
   *       "Type": "String",
   *       "AllowedValues": [],
   *       "AssociationParameterNames": [
   *         "RegionId",
   *         "zoneId",
   *         "InstanceType"
   *       ],
   *       "ParameterKey": "systemDiskCategory"
   *     }
   *   ]
   */
  parameterConstraints?: { [key: string]: any };
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBEC8072-BEC2-478E-8EAE-E723BA79CF19
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameterConstraints: 'ParameterConstraints',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterConstraints: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.parameterConstraints) {
      $dara.Model.validateMap(this.parameterConstraints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

