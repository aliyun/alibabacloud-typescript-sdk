// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags. This parameter takes effect only if TagKeys is left empty. Valid values: true and false. Default value: false. TagKeys is required if this parameter is set to false.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The IDs of the resources for which you want to modify the resource group. The number of resource IDs is 1 to 50.
   * 
   * *   If you set ResourceType to template, specify ResourceIds in the ["TemplateName1","TemplateName2"] format.
   * *   If you set ResourceType to parameter, specify ResourceIds in the ["Name1","Name2"] format.
   * *   If you set ResourceType to secretparameter, specify ResourceIds in the ["Name1","Name2"] format.
   * *   If you set ResourceType to stateconfiguration, specify ResourceIds in the ["StateConfigurationId 1","StateConfigurationId 2"] format.
   * *   If you set ResourceType to application, specify ResourceIds in the ["Name1","Name2"] format.
   * 
   * This parameter is required.
   * 
   * @example
   * ["templateName1","templateName2"]
   */
  resourceIdsShrink?: string;
  /**
   * @remarks
   * The type of the resource for which you want to modify the resource group. Valid values:
   * 
   * *   template: template.
   * *   parameter: parameter.
   * *   secretparameter: encryption parameter.
   * *   stateconfiguration: desired-state configuration.
   * *   application: application.
   * 
   * This parameter is required.
   * 
   * @example
   * template
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys. The number of keys ranges from 1 to 20.
   * 
   * @example
   * ["k1","k2"]
   */
  tagKeysShrink?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceIdsShrink: 'ResourceIds',
      resourceType: 'ResourceType',
      tagKeysShrink: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceIdsShrink: 'string',
      resourceType: 'string',
      tagKeysShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

