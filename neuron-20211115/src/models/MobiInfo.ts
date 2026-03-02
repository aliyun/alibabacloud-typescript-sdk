// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MobiInfo extends $dara.Model {
  /**
   * @example
   * commit_pckesd7d_20230227215101
   */
  mobiCommitId?: string;
  /**
   * @example
   * 1
   */
  mobiId?: number;
  /**
   * @example
   * module_tvtpydeq
   */
  mobiModuleId?: string;
  /**
   * @example
   * sda
   */
  storeUrl?: string;
  static names(): { [key: string]: string } {
    return {
      mobiCommitId: 'mobiCommitId',
      mobiId: 'mobiId',
      mobiModuleId: 'mobiModuleId',
      storeUrl: 'storeUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobiCommitId: 'string',
      mobiId: 'number',
      mobiModuleId: 'string',
      storeUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

