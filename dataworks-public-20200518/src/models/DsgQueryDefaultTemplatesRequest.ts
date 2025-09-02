// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgQueryDefaultTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the level-2 data masking scenario. You can call the [DsgSceneQuerySceneListByName](https://help.aliyun.com/document_detail/2786322.html) operation to query the list of IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  sceneId?: number;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

