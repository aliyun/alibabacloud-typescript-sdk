// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The client-generated idempotency token used to prevent duplicate operations caused by network retries. The token must be unique across requests and contain only printable ASCII characters (ASCII 32-126).
   * 
   * @example
   * 550e8400-e29b-41d4-a716-446655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. When set to true, only parameter validation and business logic checks are performed without actually creating or updating resources.
   */
  dryRun?: boolean;
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
   * The human-machine moderation configuration.
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
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
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
      clientToken: 'string',
      dryRun: 'boolean',
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

