// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVmcoreDiagnosisTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Download link for the debuginfo-common file. This parameter is optional when the diagnosis type is vmcore.  
   * 
   * For CentOS or Alinux kernel diagnosis, the corresponding debuginfo-common file is automatically downloaded, so you do not need to provide this parameter. For kernels of other distributions, you must manually provide the download link for the debuginfo-common file that matches the kernel version.
   * 
   * @example
   * https://bucket-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/debuginfo-common/file/path
   */
  debuginfoCommonUrl?: string;
  /**
   * @remarks
   * The download link of the debuginfo file corresponding to the vmcore file. This parameter is optional when the diagnosis type is vmcore.
   * 
   * For CentOS or Alinux kernel diagnosis, the corresponding debuginfo file is automatically downloaded, so you do not need to provide this parameter. For kernels from other distributions, you must manually provide the download link for the debuginfo file that matches the kernel version.
   * 
   * @example
   * https://bucket-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/debuginfo/file/path
   */
  debuginfoUrl?: string;
  /**
   * @remarks
   * Download link for the dmesg log file. This parameter is required when the diagnosis type is dmesg.
   * 
   * @example
   * https://bucket-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/dmesg/file/path
   */
  dmesgUrl?: string;
  /**
   * @remarks
   * Task Type  
   * 
   * vmcore: vmcore file diagnosis task  
   * 
   * dmesg: dmesg log diagnosis task
   * 
   * This parameter is required.
   * 
   * @example
   * vmcore
   */
  taskType?: string;
  /**
   * @remarks
   * The download link of the vmcore file. This parameter is required when the diagnosis type is vmcore.
   * 
   * @example
   * https://bucket-cn-hangzhou.oss-cn-hangzhou.aliyuncs.com/vmcore/file/path
   */
  vmcoreUrl?: string;
  static names(): { [key: string]: string } {
    return {
      debuginfoCommonUrl: 'debuginfoCommonUrl',
      debuginfoUrl: 'debuginfoUrl',
      dmesgUrl: 'dmesgUrl',
      taskType: 'taskType',
      vmcoreUrl: 'vmcoreUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debuginfoCommonUrl: 'string',
      debuginfoUrl: 'string',
      dmesgUrl: 'string',
      taskType: 'string',
      vmcoreUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

