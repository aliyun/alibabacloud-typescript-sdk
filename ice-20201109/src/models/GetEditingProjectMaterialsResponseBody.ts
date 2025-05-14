// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEditingProjectMaterialsResponseBodyLiveMaterials } from "./GetEditingProjectMaterialsResponseBodyLiveMaterials";
import { GetEditingProjectMaterialsResponseBodyMediaInfos } from "./GetEditingProjectMaterialsResponseBodyMediaInfos";


export class GetEditingProjectMaterialsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The materials associated with the live stream.
   */
  liveMaterials?: GetEditingProjectMaterialsResponseBodyLiveMaterials[];
  /**
   * @remarks
   * The media assets that meet the specified conditions.
   */
  mediaInfos?: GetEditingProjectMaterialsResponseBodyMediaInfos[];
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * *****67ae06542b9b93e0d1c387*****
   */
  projectId?: string;
  /**
   * @remarks
   * The materials associated with the editing project. A live stream editing project will be associated with a regular editing project after the live streaming ends.
   * 
   * @example
   * *****9b145c5cafc2e057304fcd*****
   */
  projectMaterials?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******89-C21D-4B78-AE24-3788B8******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      liveMaterials: 'LiveMaterials',
      mediaInfos: 'MediaInfos',
      projectId: 'ProjectId',
      projectMaterials: 'ProjectMaterials',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      liveMaterials: { 'type': 'array', 'itemType': GetEditingProjectMaterialsResponseBodyLiveMaterials },
      mediaInfos: { 'type': 'array', 'itemType': GetEditingProjectMaterialsResponseBodyMediaInfos },
      projectId: 'string',
      projectMaterials: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.liveMaterials)) {
      $dara.Model.validateArray(this.liveMaterials);
    }
    if(Array.isArray(this.mediaInfos)) {
      $dara.Model.validateArray(this.mediaInfos);
    }
    if(Array.isArray(this.projectMaterials)) {
      $dara.Model.validateArray(this.projectMaterials);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

