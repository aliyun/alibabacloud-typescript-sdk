// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConnectableClustersRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return instances that are already connected. Valid values:
   * 
   * - true (default): The returned instance list includes instances that are already connected.
   * - false: The returned instance list does not include instances that are already connected.
   * 
   * @example
   * true
   */
  alreadySetItems?: boolean;
  static names(): { [key: string]: string } {
    return {
      alreadySetItems: 'alreadySetItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alreadySetItems: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

