// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScanResultsByEngineRequest extends $dara.Model {
  /**
   * @remarks
   * 按 baseline_state 过滤 findings。值为 new/unchanged/absent/updated 之一。
   */
  baselineState?: string;
  lang?: string;
  maxResults?: number;
  nextToken?: string;
  packageName?: string;
  static names(): { [key: string]: string } {
    return {
      baselineState: 'baselineState',
      lang: 'lang',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      packageName: 'packageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineState: 'string',
      lang: 'string',
      maxResults: 'number',
      nextToken: 'string',
      packageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

