// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the GTM instance.
   * 
   * This parameter is required.
   * 
   * @example
   * instance1
   */
  instanceId?: string;
  /**
   * @remarks
   * The language of the values of specific response parameters.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether additional information is required. Default value: **false**. If the value is **true**, the AccessStrategyNum and AddressPoolNum parameters are returned.
   * 
   * @example
   * false
   */
  needDetailAttributes?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      lang: 'Lang',
      needDetailAttributes: 'NeedDetailAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      lang: 'string',
      needDetailAttributes: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

