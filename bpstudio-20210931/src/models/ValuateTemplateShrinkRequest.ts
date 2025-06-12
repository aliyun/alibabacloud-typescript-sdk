// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ValuateTemplateShrinkRequest extends $dara.Model {
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
  instancesShrink?: string;
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
  variablesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      areaId: 'AreaId',
      clientToken: 'ClientToken',
      instancesShrink: 'Instances',
      resourceGroupId: 'ResourceGroupId',
      templateId: 'TemplateId',
      variablesShrink: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaId: 'string',
      clientToken: 'string',
      instancesShrink: 'string',
      resourceGroupId: 'string',
      templateId: 'string',
      variablesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

