// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContainerGroupRequestHostSecurityContextSysctl extends $dara.Model {
  /**
   * @remarks
   * The name of the unsafe sysctl when you modify sysctls by configuring a security context. Valid values:
   * 
   * *   kernel.shm \\* (except kernel.shm_rmid_forced)
   * *   kernel.msg\\*
   * *   kernel.sem
   * *   fs.mqueue.\\*
   * *   net.\\*(except net.ipv4.tcp_syncookies, net.ipv4.ping_group_range, and net.ipv4.ip_unprivileged_port_start)
   * 
   * @example
   * kernel.msgmax
   */
  name?: string;
  /**
   * @remarks
   * The value of the unsafe sysctl when you modify sysctls by configuring a security context.
   * 
   * @example
   * 65536
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

