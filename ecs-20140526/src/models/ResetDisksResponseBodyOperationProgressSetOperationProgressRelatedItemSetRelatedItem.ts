// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetDisksResponseBodyOperationProgressSetOperationProgressRelatedItemSetRelatedItem extends $dara.Model {
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * SnapshotId
   */
  name?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * s-j6cdofbycydvg7ey****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

