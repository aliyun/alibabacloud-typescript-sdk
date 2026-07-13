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
   * The language.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to return additional information. The default value is **false**. If you set this parameter to **true**, the response includes AccessStrategyNum (the number of access policies) and AddressPoolNum (the number of address pools).
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

