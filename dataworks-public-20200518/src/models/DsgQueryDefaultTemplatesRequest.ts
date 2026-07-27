// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgQueryDefaultTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Level-2 Desensitization Scene. Call the [DsgSceneQuerySceneListByName](https://help.aliyun.com/document_detail/2786322.html) API to obtain this ID.
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

