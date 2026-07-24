// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The document configuration.
   * 
   * @example
   * {}
   */
  fileConfig?: string;
  /**
   * @remarks
   * The keyword filter libraries.
   * 
   * @example
   * []
   */
  keywordFilterLibs?: string;
  /**
   * @remarks
   * The keyword hit libraries.
   * 
   * @example
   * []
   */
  keywordHitLibs?: string;
  /**
   * @remarks
   * The machine-assisted moderation configuration.
   * 
   * @example
   * {}
   */
  manualMachineConfig?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * image
   */
  resourceType?: string;
  /**
   * @remarks
   * The moderation scenario.
   * 
   * @example
   * pornographic
   */
  scene?: string;
  /**
   * @remarks
   * The scenario configuration.
   * 
   * @example
   * {}
   */
  sceneConfig?: string;
  /**
   * @remarks
   * The service code.
   * 
   * @example
   * baselineCheck
   */
  serviceCode?: string;
  /**
   * @remarks
   * The service configuration.
   * 
   * @example
   * {}
   */
  serviceConfig?: string;
  /**
   * @remarks
   * The video configuration.
   * 
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
      serviceConfig: 'ServiceConfig',
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
      serviceConfig: 'string',
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

