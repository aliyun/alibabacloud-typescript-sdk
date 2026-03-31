// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTemplateAttributesRequest extends $dara.Model {
  /**
   * @example
   * ["1319994761488600"]
   */
  accountIds?: string;
  /**
   * @example
   * true
   */
  isFavorite?: boolean;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * Share
   */
  sharePermissionAction?: string;
  /**
   * @example
   * v1
   */
  shareTemplateVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MyTemplate
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      isFavorite: 'IsFavorite',
      regionId: 'RegionId',
      sharePermissionAction: 'SharePermissionAction',
      shareTemplateVersion: 'ShareTemplateVersion',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: 'string',
      isFavorite: 'boolean',
      regionId: 'string',
      sharePermissionAction: 'string',
      shareTemplateVersion: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

