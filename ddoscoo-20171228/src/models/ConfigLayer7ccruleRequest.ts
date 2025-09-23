// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigLayer7CCRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * close
   */
  act?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5
   */
  interval?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * match
   */
  mode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testCcRule1
   */
  name?: string;
  /**
   * @example
   * test
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /a/b/c
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      act: 'Act',
      count: 'Count',
      domain: 'Domain',
      interval: 'Interval',
      mode: 'Mode',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      ttl: 'Ttl',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      act: 'string',
      count: 'number',
      domain: 'string',
      interval: 'number',
      mode: 'string',
      name: 'string',
      resourceGroupId: 'string',
      ttl: 'number',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

