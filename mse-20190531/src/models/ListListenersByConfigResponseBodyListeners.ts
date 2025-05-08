// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListListenersByConfigResponseBodyListeners extends $dara.Model {
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 1.1.1.1
   */
  ip?: string;
  /**
   * @remarks
   * The label of the listener.
   */
  labels?: { [key: string]: string };
  matchRuleName?: string;
  matchRuleType?: string;
  /**
   * @remarks
   * The verification string.
   * 
   * @example
   * 23sdfdf
   */
  md5?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * beta
   */
  status?: string;
  /**
   * @remarks
   * The current version of the listener. Valid values: gray and normal.
   * 
   * @example
   * gray
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      labels: 'Labels',
      matchRuleName: 'MatchRuleName',
      matchRuleType: 'MatchRuleType',
      md5: 'Md5',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      matchRuleName: 'string',
      matchRuleType: 'string',
      md5: 'string',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

