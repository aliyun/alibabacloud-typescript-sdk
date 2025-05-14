// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEditingProjectMaterialsRequest extends $dara.Model {
  /**
   * @remarks
   * The material ID. Separate multiple material IDs with commas (,). You can specify up to 10 IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * *****cbd721b418a89a7dafb1dc*****,*****86f5d534c95997c55c96f*****
   */
  materialIds?: string;
  /**
   * @remarks
   * The material type. Valid values:
   * 
   * \\- video
   * 
   * \\- image
   * 
   * \\- audio
   * 
   * \\- subtitle
   * 
   * \\- text
   * 
   * This parameter is required.
   * 
   * @example
   * video
   */
  materialType?: string;
  /**
   * @remarks
   * The ID of the online editing project.
   * 
   * This parameter is required.
   * 
   * @example
   * *****fb2101cb318*****
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      materialIds: 'MaterialIds',
      materialType: 'MaterialType',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialIds: 'string',
      materialType: 'string',
      projectId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

