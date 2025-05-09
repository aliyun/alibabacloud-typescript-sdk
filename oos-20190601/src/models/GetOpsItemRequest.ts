// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOpsItemRequest extends $dara.Model {
  /**
   * @remarks
   * The O\\&M item ID.
   * 
   * This parameter is required.
   * 
   * @example
   * oi-d52b08695e2b46ae8413
   */
  opsItemId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      opsItemId: 'OpsItemId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opsItemId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

