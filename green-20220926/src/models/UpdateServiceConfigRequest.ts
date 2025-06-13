// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceConfigRequest extends $dara.Model {
  /**
   * @example
   * {}
   */
  fileConfig?: string;
  /**
   * @example
   * []
   */
  keywordFilterLibs?: string;
  /**
   * @example
   * []
   */
  keywordHitLibs?: string;
  manualMachineConfig?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * image
   */
  resourceType?: string;
  /**
   * @example
   * pornographic
   */
  scene?: string;
  /**
   * @example
   * {}
   */
  sceneConfig?: string;
  /**
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  /**
   * @example
   * {}
   */
  videoConfig?: string;
  static names(): { [key: string]: string } {
    return {
      fileConfig: 'FileConfig',
      keywordFilterLibs: 'KeywordFilterLibs',
      keywordHitLibs: 'KeywordHitLibs',
      manualMachineConfig: 'ManualMachineConfig',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      scene: 'Scene',
      sceneConfig: 'SceneConfig',
      serviceCode: 'ServiceCode',
      videoConfig: 'VideoConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileConfig: 'string',
      keywordFilterLibs: 'string',
      keywordHitLibs: 'string',
      manualMachineConfig: 'string',
      regionId: 'string',
      resourceType: 'string',
      scene: 'string',
      sceneConfig: 'string',
      serviceCode: 'string',
      videoConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

