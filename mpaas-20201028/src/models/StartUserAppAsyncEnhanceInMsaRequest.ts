// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartUserAppAsyncEnhanceInMsaRequest extends $dara.Model {
  apkProtector?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  assetsFileList?: string;
  classes?: string;
  dalvikDebugger?: number;
  emulatorEnvironment?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  id?: number;
  javaHook?: number;
  memoryDump?: number;
  nativeDebugger?: number;
  nativeHook?: number;
  newShieldConfig?: string;
  packageTampered?: number;
  root?: number;
  runMode?: string;
  soFileList?: string;
  taskType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tenantId?: string;
  totalSwitch?: boolean;
  useAShield?: boolean;
  useYShield?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apkProtector: 'ApkProtector',
      appId: 'AppId',
      assetsFileList: 'AssetsFileList',
      classes: 'Classes',
      dalvikDebugger: 'DalvikDebugger',
      emulatorEnvironment: 'EmulatorEnvironment',
      id: 'Id',
      javaHook: 'JavaHook',
      memoryDump: 'MemoryDump',
      nativeDebugger: 'NativeDebugger',
      nativeHook: 'NativeHook',
      newShieldConfig: 'NewShieldConfig',
      packageTampered: 'PackageTampered',
      root: 'Root',
      runMode: 'RunMode',
      soFileList: 'SoFileList',
      taskType: 'TaskType',
      tenantId: 'TenantId',
      totalSwitch: 'TotalSwitch',
      useAShield: 'UseAShield',
      useYShield: 'UseYShield',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apkProtector: 'boolean',
      appId: 'string',
      assetsFileList: 'string',
      classes: 'string',
      dalvikDebugger: 'number',
      emulatorEnvironment: 'number',
      id: 'number',
      javaHook: 'number',
      memoryDump: 'number',
      nativeDebugger: 'number',
      nativeHook: 'number',
      newShieldConfig: 'string',
      packageTampered: 'number',
      root: 'number',
      runMode: 'string',
      soFileList: 'string',
      taskType: 'string',
      tenantId: 'string',
      totalSwitch: 'boolean',
      useAShield: 'boolean',
      useYShield: 'boolean',
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

