// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValuateTemplateRequestInstances extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * vpc-bp1q56trhtaq40vlq5oj
   */
  id?: string;
  /**
   * @remarks
   * The name of the application instance that is displayed on the diagram.
   * 
   * @example
   * ecs
   */
  nodeName?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ecs
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      nodeName: 'NodeName',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      nodeName: 'string',
      nodeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValuateTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  areaId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * This parameter is required.
   * 
   * @example
   * 1600765710019
   */
  clientToken?: string;
  /**
   * @remarks
   * The instances to be replaced.
   */
  instances?: ValuateTemplateRequestInstances[];
  /**
   * @remarks
   * The ID of the resource group to which the application belongs.
   * 
   * @example
   * rg-acfmyjt3c5om3fi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 0KSHPM6SJU03TNZP
   */
  templateId?: string;
  /**
   * @remarks
   * The parameter values that are contained in the template. If the template contains no parameter values, the default values are used.
   */
  variables?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      clientToken: 'ClientToken',
      instances: 'Instances',
      resourceGroupId: 'ResourceGroupId',
      templateId: 'TemplateId',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'string',
      clientToken: 'string',
      instances: { 'type': 'array', 'itemType': ValuateTemplateRequestInstances },
      resourceGroupId: 'string',
      templateId: 'string',
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    if(this.variables) {
      $dara.Model.validateMap(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

