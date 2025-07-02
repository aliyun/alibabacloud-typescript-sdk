// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteApiTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Interface name.
   * 
   * This parameter is required.
   * 
   * @example
   * CreateCluster
   */
  apiName?: string;
  /**
   * @remarks
   * Region ID
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfmzabjyop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Cluster template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * at-****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

