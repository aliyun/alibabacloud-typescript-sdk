// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImportHttpApiResponseBodyDataDryRunInfo } from "./ImportHttpApiResponseBodyDataDryRunInfo";


export class ImportHttpApiResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The dry run result.
   */
  dryRunInfo?: ImportHttpApiResponseBodyDataDryRunInfo;
  /**
   * @remarks
   * The API ID.
   * 
   * @example
   * api-xxx
   */
  httpApiId?: string;
  /**
   * @remarks
   * The API name.
   * 
   * @example
   * import-test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      dryRunInfo: 'dryRunInfo',
      httpApiId: 'httpApiId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRunInfo: ImportHttpApiResponseBodyDataDryRunInfo,
      httpApiId: 'string',
      name: 'string',
    };
  }

  validate() {
    if(this.dryRunInfo && typeof (this.dryRunInfo as any).validate === 'function') {
      (this.dryRunInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

