// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyQosRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum downstream bandwidth. The unit is Mbps.
   * 
   * @example
   * 10
   */
  download?: number;
  /**
   * @remarks
   * The ID of the QoS rule.
   * 
   * This parameter is required.
   * 
   * @example
   * qos-5605u0gelk200****
   */
  qosRuleId?: string;
  /**
   * @remarks
   * The name of the QoS rule.
   * 
   * @example
   * test
   */
  qosRuleName?: string;
  /**
   * @remarks
   * The maximum upstream bandwidth. The unit is Mbps.
   * 
   * @example
   * 10
   */
  upload?: number;
  static names(): { [key: string]: string } {
    return {
      download: 'Download',
      qosRuleId: 'QosRuleId',
      qosRuleName: 'QosRuleName',
      upload: 'Upload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      download: 'number',
      qosRuleId: 'string',
      qosRuleName: 'string',
      upload: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

