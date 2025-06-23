// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebCCRuleRequest extends $dara.Model {
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
   * 3
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
   * 30
   */
  interval?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * prefix
   */
  mode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testrule
   */
  name?: string;
  /**
   * @example
   * default
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The blocking duration. Valid values: **60** to **86400**. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  ttl?: number;
  /**
   * @remarks
   * The check path.
   * 
   * >  You cannot modify the Uniform Resource Identifier (URI). The domain name of the website, the check path, and the rule name uniquely identify a rule.
   * 
   * This parameter is required.
   * 
   * @example
   * /abc
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

