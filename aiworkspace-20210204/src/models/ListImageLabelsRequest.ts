// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageLabelsRequest extends $dara.Model {
  /**
   * @remarks
   * The image ID. For more information about how to obtain an image ID, see [ListImages](https://help.aliyun.com/document_detail/449118.html).
   * 
   * @example
   * image-4c62******53uor
   */
  imageId?: string;
  /**
   * @remarks
   * The filter conditions for labels. Separate multiple conditions with commas.
   * The format for a single condition is `key=value`.
   * This parameter works independently of the LabelKeys parameter.
   * 
   * @example
   * system.framework=XGBoost 1.6.0,system.official=true
   */
  labelFilter?: string;
  /**
   * @remarks
   * The list of tag keys. Separate multiple keys with commas (,).
   * System tags start with "system". This parameter works independently of the LabelFilter parameter.
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
   * The workspace ID. For more information about how to obtain a workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
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

