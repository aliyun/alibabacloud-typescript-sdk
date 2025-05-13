// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageLabelsRequest extends $dara.Model {
  /**
   * @remarks
   * The image ID. You can call [ListImages](https://help.aliyun.com/document_detail/449118.html) to obtain the image ID.
   * 
   * @example
   * image-4c62******53uor
   */
  imageId?: string;
  /**
   * @remarks
   * The tag filter conditions, separated with commas (,). The format of a single condition filter is `key=value`. Takes effect independently from LabelKeys.
   * 
   * @example
   * system.framework=XGBoost 1.6.0,system.official=true
   */
  labelFilter?: string;
  /**
   * @remarks
   * The tag keys, separated with commas (,). System tags start with system and take effect independently from LabelFilter.
   * 
   * @example
   * system.framework,system.official
   */
  labelKeys?: string;
  /**
   * @remarks
   * The region where the image resides.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
   * @example
   * 12345
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      labelFilter: 'LabelFilter',
      labelKeys: 'LabelKeys',
      region: 'Region',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      labelFilter: 'string',
      labelKeys: 'string',
      region: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

