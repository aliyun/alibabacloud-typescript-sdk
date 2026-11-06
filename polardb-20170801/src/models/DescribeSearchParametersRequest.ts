// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSearchParametersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the PolarDB primary cluster, which is used to locate the Search cluster associated with the current account.
   * 
   * This parameter is required.
   * 
   * @example
   * pc-xxxxxxxx
   */
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

