// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRumAppRequest extends $dara.Model {
  /**
   * @remarks
   * The legacy application configuration in JSON format. This parameter is deprecated.
   * 
   * @example
   * {"apiRequestOfH5":300,"apiRequestOfOriginal":500,"coldStart":5000,"hotStart":3000,"staticResourceLoad":300,"stutter":1000,"viewLoadOfH5":1000,"viewLoadOfOriginal":2000}
   */
  appConfig?: string;
  /**
   * @remarks
   * Specifies whether to restart the application the next day. Valid values:
   * - true: Restart.
   * - false: Do not restart.
   * 
   * @example
   * true
   */
  autoRestart?: boolean;
  /**
   * @remarks
   * The region where the backend application is deployed. This parameter is used in end-to-end tracing scenarios.
   * 
   * @example
   * cn-hangzhou
   */
  backendServiceTraceRegion?: string;
  /**
   * @remarks
   * The mobile SDK collection configuration. You can enable or disable collection items by app version.
   * 
   * @example
   * {\\"moduleConfig\\":{\\"enable\\":true,\\"defaultConfig\\":{\\"network\\":{\\"enable\\":true},\\"h5\\":{\\"enable\\":true},\\"routechange\\":{\\"enable\\":true},\\"crash\\":{\\"enable\\":true},\\"view\\":{\\"enable\\":true},\\"coollaunch\\":{\\"enable\\":true},\\"hotlaunch\\":{\\"enable\\":true},\\"action\\":{\\"enable\\":true},\\"lagstuck\\":{\\"enable\\":true},\\"lagfps\\":{\\"enable\\":true},\\"statechange\\":{\\"enable\\":true},\\"anr\\":{\\"enable\\":true},\\"customlog\\":{\\"enable\\":true},\\"customevent\\":{\\"enable\\":true},\\"custommetric\\":{\\"enable\\":true}},\\"versionConfigs\\":{\\"1.1.0\\":{\\"useCustom\\":true,\\"customConfig\\":{\\"network\\":{\\"enable\\":true},\\"h5\\":{\\"enable\\":true},\\"routechange\\":{\\"enable\\":true},\\"crash\\":{\\"enable\\":true},\\"view\\":{\\"enable\\":true},\\"coollaunch\\":{\\"enable\\":true},\\"hotlaunch\\":{\\"enable\\":true},\\"action\\":{\\"enable\\":true},\\"lagstuck\\":{\\"enable\\":false},\\"lagfps\\":{\\"enable\\":false},\\"statechange\\":{\\"enable\\":true},\\"anr\\":{\\"enable\\":true},\\"customlog\\":{\\"enable\\":true},\\"customevent\\":{\\"enable\\":true},\\"custommetric\\":{\\"enable\\":true}}},\\"1.2.0\\":{\\"useCustom\\":false,\\"customConfig\\":{}}}}}
   */
  bonreeSDKConfigJson?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * 测试
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to add the application to favorites. Valid values:
   * - true: Add to favorites.
   * - false: Do not add to favorites.
   * 
   * @example
   * true
   */
  isSubscribe?: boolean;
  /**
   * @remarks
   * The alias of the application.
   * 
   * @example
   * 应用别名。
   */
  nickname?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * b5xxxxs@d8deedfa9bf****
   */
  pid?: string;
  /**
   * @remarks
   * The region where the application is actually connected. This parameter is used only in the China (Shanghai) Finance Cloud scenario.
   * 
   * @example
   * cn-shanghai-finance-1
   */
  realRegionId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to restart the application. Valid values:
   * - true: Restart.
   * - false: Do not restart.
   * 
   * @example
   * true
   */
  restart?: boolean;
  /**
   * @remarks
   * The service domain name settings for the application. You can create, update, or delete service domain name configurations.
   * 
   * @example
   * {\\"Op\\":\\"Update\\",\\"Domain\\":\\"example.com\\",\\"Config\\":{\\"Description\\":\\"这是描述bbb\\",\\"Tracing\\":\\"true\\",\\"PropagatorTypes\\":[\\"sw8\\"]}}
   */
  serviceDomainOperationJson?: string;
  /**
   * @remarks
   * Specifies whether to stop the application. Valid values:
   * - true: Stop.
   * - false: Do not stop.
   * 
   * @example
   * true
   */
  stop?: boolean;
  webSDKConfigJson?: string;
  static names(): { [key: string]: string } {
    return {
      appConfig: 'AppConfig',
      autoRestart: 'AutoRestart',
      backendServiceTraceRegion: 'BackendServiceTraceRegion',
      bonreeSDKConfigJson: 'BonreeSDKConfigJson',
      description: 'Description',
      isSubscribe: 'IsSubscribe',
      nickname: 'Nickname',
      pid: 'Pid',
      realRegionId: 'RealRegionId',
      regionId: 'RegionId',
      restart: 'Restart',
      serviceDomainOperationJson: 'ServiceDomainOperationJson',
      stop: 'Stop',
      webSDKConfigJson: 'WebSDKConfigJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appConfig: 'string',
      autoRestart: 'boolean',
      backendServiceTraceRegion: 'string',
      bonreeSDKConfigJson: 'string',
      description: 'string',
      isSubscribe: 'boolean',
      nickname: 'string',
      pid: 'string',
      realRegionId: 'string',
      regionId: 'string',
      restart: 'boolean',
      serviceDomainOperationJson: 'string',
      stop: 'boolean',
      webSDKConfigJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

