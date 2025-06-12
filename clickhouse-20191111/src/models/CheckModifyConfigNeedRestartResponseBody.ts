// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckModifyConfigNeedRestartResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the cluster was restarted after you modified the configuration parameters. Valid values:
   * 
   * *   **true**: The cluster was restarted.
   * *   **false**: The cluster was not restarted.
   * 
   * @example
   * true
   */
  needRestart?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 06798FEE-BEF2-5FAF-A30D-728973BBE97C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      needRestart: 'NeedRestart',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needRestart: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

