// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskSecurityGroupDetailRequest extends $dara.Model {
  /**
   * @example
   * sg-2vc0p803vgxumn6r****
   */
  instanceId?: string;
  /**
   * @example
   * test-instance-name
   */
  instanceName?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * 3b1adf8d-1949-4c8e-809b-fb92ee11****
   */
  ruleUuid?: string;
  /**
   * @example
   * 220.189.117.XXX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      lang: 'Lang',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      ruleUuid: 'RuleUuid',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      lang: 'string',
      pageNo: 'string',
      pageSize: 'string',
      regionId: 'string',
      ruleUuid: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

