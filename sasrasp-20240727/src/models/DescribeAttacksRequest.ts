// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAttacksRequest extends $dara.Model {
  /**
   * @example
   * sas
   */
  agentType?: string;
  /**
   * @example
   * 67e283ee866f097cf07d****
   */
  applicationId?: string;
  /**
   * @example
   * 127.0.0.1
   */
  attackHostId?: string;
  /**
   * @example
   * sql
   */
  attackType?: string;
  /**
   * @example
   * http://aliyun.com
   */
  attackUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1737216000000
   */
  endTimestamp?: number;
  handleStatus?: number;
  /**
   * @example
   * block
   */
  handlerType?: string;
  /**
   * @example
   * lshm-sec-waf-new-38
   */
  hostname?: string;
  /**
   * @example
   * 127.0.0.1
   */
  ip?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 4
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  pid?: string;
  /**
   * @example
   * java
   */
  raspType?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  remote?: string;
  /**
   * @example
   * high
   */
  severity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1727281449756
   */
  startTimestamp?: number;
  /**
   * @example
   * 2d14556b77cf1bf7c696e010aaa*****
   */
  unionId?: string;
  static names(): { [key: string]: string } {
    return {
      agentType: 'AgentType',
      applicationId: 'ApplicationId',
      attackHostId: 'AttackHostId',
      attackType: 'AttackType',
      attackUrl: 'AttackUrl',
      endTimestamp: 'EndTimestamp',
      handleStatus: 'HandleStatus',
      handlerType: 'HandlerType',
      hostname: 'Hostname',
      ip: 'Ip',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pid: 'Pid',
      raspType: 'RaspType',
      region: 'Region',
      remote: 'Remote',
      severity: 'Severity',
      startTimestamp: 'StartTimestamp',
      unionId: 'UnionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentType: 'string',
      applicationId: 'string',
      attackHostId: 'string',
      attackType: 'string',
      attackUrl: 'string',
      endTimestamp: 'number',
      handleStatus: 'number',
      handlerType: 'string',
      hostname: 'string',
      ip: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pid: 'string',
      raspType: 'string',
      region: 'string',
      remote: 'string',
      severity: 'string',
      startTimestamp: 'number',
      unionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

