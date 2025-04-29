// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesInstanceAttributeInstanceSpecAttributesSpecAttribute extends $dara.Model {
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * SLA
   */
  localName?: string;
  /**
   * @remarks
   * The variable value.
   * 
   * @example
   * 99.95%
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

