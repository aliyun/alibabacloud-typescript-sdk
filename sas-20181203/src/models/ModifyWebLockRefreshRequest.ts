// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWebLockRefreshRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the server for which you want to refresh the status of the web tamper proofing feature.
   * 
   * >  You can call the [DescribeWebLockBindList](~~DescribeWebLockBindList~~) operation to query the servers for which the web tamper proofing feature is enabled.
   * 
   * @example
   * 55c0f41b-3093-47a7-8eae-02d3a584****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

