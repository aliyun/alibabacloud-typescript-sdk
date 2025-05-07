// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComponentsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The description of the component.
   * 
   * @example
   * Open JDK 8
   */
  componentDescription?: string;
  /**
   * @remarks
   * The component ID.
   * 
   * @example
   * Open JDK 8
   */
  componentKey?: string;
  /**
   * @remarks
   * Indicates whether the component is expired. Valid values:
   * 
   * *   **true**: The component is expired.
   * *   **false**: The component is not expired.
   * 
   * @example
   * false
   */
  expired?: boolean;
  /**
   * @remarks
   * The type of the component.
   * 
   * @example
   * JDK
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      componentDescription: 'ComponentDescription',
      componentKey: 'ComponentKey',
      expired: 'Expired',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentDescription: 'string',
      componentKey: 'string',
      expired: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

