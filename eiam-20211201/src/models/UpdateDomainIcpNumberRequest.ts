// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDomainIcpNumberRequest extends $dara.Model {
  /**
   * @remarks
   * 域名ID。
   * 
   * This parameter is required.
   * 
   * @example
   * dm_examplexxxxx
   */
  domainId?: string;
  /**
   * @remarks
   * 域名关联的备案号，长度最大限制64。
   * 
   * This parameter is required.
   * 
   * @example
   * 浙xx-xxxxxx
   */
  icpNumber?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      icpNumber: 'IcpNumber',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      icpNumber: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

