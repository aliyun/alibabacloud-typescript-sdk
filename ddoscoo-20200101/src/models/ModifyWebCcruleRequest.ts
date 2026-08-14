// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebCCRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  act?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  count?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  domain?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  interval?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  mode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ttl?: number;
  /**
   * @remarks
   * This parameter is required.
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

