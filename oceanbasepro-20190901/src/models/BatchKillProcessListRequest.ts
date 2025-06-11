// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchKillProcessListRequest extends $dara.Model {
  byObSessionId?: boolean;
  /**
   * @remarks
   * The ID of the OceanBase cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of sessions to close.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"ProxySessId":"752113700739156671","SessionId":3221555062,"ServerIp":"10.***.**.***"}]
   */
  sessionList?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * This parameter is required.
   * 
   * @example
   * t33h8y08k****
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      byObSessionId: 'ByObSessionId',
      instanceId: 'InstanceId',
      sessionList: 'SessionList',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byObSessionId: 'boolean',
      instanceId: 'string',
      sessionList: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

