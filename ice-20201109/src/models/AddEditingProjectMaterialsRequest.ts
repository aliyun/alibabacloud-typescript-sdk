// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddEditingProjectMaterialsRequest extends $dara.Model {
  /**
   * @remarks
   * The material ID. Separate multiple material IDs with commas (,). Each type supports up to 10 material IDs. The following material types are supported:
   * 
   * *   video
   * *   audio
   * *   image
   * *   liveStream
   * *   editingProject
   * 
   * This parameter is required.
   * 
   * @example
   * {"video":"*****2e057304fcd9b145c5cafc*****", "image":"****8021a8d493da643c8acd98*****,*****cb6307a4edea614d8b3f3c*****", "liveStream": "[{\\"appName\\":\\"testrecord\\",\\"domainName\\":\\"test.alivecdn.com\\",\\"liveUrl\\":\\"rtmp://test.alivecdn.com/testrecord/teststream\\",\\"streamName\\":\\"teststream\\"}]", "editingProject": "*****9b145c5cafc2e057304fcd*****"}
   */
  materialMaps?: string;
  /**
   * @remarks
   * The ID of the online editing project.
   * 
   * This parameter is required.
   * 
   * @example
   * *****b2101cb318c*****
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      materialMaps: 'MaterialMaps',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialMaps: 'string',
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

