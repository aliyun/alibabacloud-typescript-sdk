// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequest extends $dara.Model {
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
  resourceIds?: { [key: string]: any };
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
   * The tag keys and values. The number of key-value pairs ranges from 1 to 20.
   * 
   * This parameter is required.
   * 
   * @example
   * {"k1":"v1","k2":"v2"}
   */
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.resourceIds) {
      $dara.Model.validateMap(this.resourceIds);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

