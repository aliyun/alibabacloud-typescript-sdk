// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Template Area
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * ResourceGroup ID
   * 
   * @example
   * rg-aekzhfgmw4e6fwq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Template ID
   * 
   * This parameter is required.
   * 
   * @example
   * XFKR6WYRVS24S07R
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      resourceGroupId: 'ResourceGroupId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
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

