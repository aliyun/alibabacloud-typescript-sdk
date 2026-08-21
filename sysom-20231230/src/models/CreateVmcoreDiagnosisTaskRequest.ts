// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVmcoreDiagnosisTaskRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The download URL of the debuginfo-common file. This parameter is optional when the diagnosis type is vmcore.
   * 
   * For CentOS or Alinux kernel diagnostics, the corresponding debuginfo-common file is automatically downloaded, so this parameter is not required. For other distribution kernels, manually provide the download URL of the debuginfo-common file that corresponds to the kernel version.
   * 
   * @example
   * https://bucket-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/debuginfo-common/file/path
   */
  debuginfoCommonUrl?: string;
  /**
   * @remarks
   * The download URL of the debuginfo file. This parameter is optional when the diagnosis type is vmcore.
   * 
   * For CentOS or Alinux kernel diagnostics, the corresponding debuginfo file is automatically downloaded, so this parameter is not required. For other distribution kernels, manually provide the download URL of the debuginfo file that corresponds to the kernel version.
   * 
   * @example
   * https://bucket-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/debuginfo/file/path
   */
  debuginfoUrl?: string;
  /**
   * @remarks
   * The download URL of the dmesg log file. This parameter is required when the diagnosis type is dmesg.
   * 
   * @example
   * https://bucket-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/dmesg/file/path
   */
  dmesgUrl?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * - vmcore: vmcore file diagnostic task.
   * - dmesg: dmesg log diagnostic task.
   * 
   * This parameter is required.
   * 
   * @example
   * vmcore
   */
  taskType?: string;
  /**
   * @remarks
   * The download URL of the vmcore file. This parameter is required when the diagnosis type is vmcore.
   * 
   * @example
   * https://bucket-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/vmcore/file/path
   */
  vmcoreUrl?: string;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      debuginfoCommonUrl: 'debuginfoCommonUrl',
      debuginfoUrl: 'debuginfoUrl',
      dmesgUrl: 'dmesgUrl',
      taskType: 'taskType',
      vmcoreUrl: 'vmcoreUrl',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      debuginfoCommonUrl: 'string',
      debuginfoUrl: 'string',
      dmesgUrl: 'string',
      taskType: 'string',
      vmcoreUrl: 'string',
      xSysomInvokeSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

