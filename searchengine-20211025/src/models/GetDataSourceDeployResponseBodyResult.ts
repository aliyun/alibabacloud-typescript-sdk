// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDataSourceDeployResponseBodyResultExtend } from "./GetDataSourceDeployResponseBodyResultExtend";
import { GetDataSourceDeployResponseBodyResultProcessor } from "./GetDataSourceDeployResponseBodyResultProcessor";
import { GetDataSourceDeployResponseBodyResultStorage } from "./GetDataSourceDeployResponseBodyResultStorage";
import { GetDataSourceDeployResponseBodyResultSwift } from "./GetDataSourceDeployResponseBodyResultSwift";


export class GetDataSourceDeployResponseBodyResult extends $dara.Model {
  /**
   * @example
   * true
   */
  autoBuildIndex?: boolean;
  extend?: GetDataSourceDeployResponseBodyResultExtend;
  /**
   * @remarks
   * The parameters of the process.
   */
  processor?: GetDataSourceDeployResponseBodyResultProcessor;
  /**
   * @remarks
   * The information about the data source.
   */
  storage?: GetDataSourceDeployResponseBodyResultStorage;
  /**
   * @remarks
   * The information about the incremental data source Swift.
   */
  swift?: GetDataSourceDeployResponseBodyResultSwift;
  static names(): { [key: string]: string } {
    return {
      autoBuildIndex: 'autoBuildIndex',
      extend: 'extend',
      processor: 'processor',
      storage: 'storage',
      swift: 'swift',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuildIndex: 'boolean',
      extend: GetDataSourceDeployResponseBodyResultExtend,
      processor: GetDataSourceDeployResponseBodyResultProcessor,
      storage: GetDataSourceDeployResponseBodyResultStorage,
      swift: GetDataSourceDeployResponseBodyResultSwift,
    };
  }

  validate() {
    if(this.extend && typeof (this.extend as any).validate === 'function') {
      (this.extend as any).validate();
    }
    if(this.processor && typeof (this.processor as any).validate === 'function') {
      (this.processor as any).validate();
    }
    if(this.storage && typeof (this.storage as any).validate === 'function') {
      (this.storage as any).validate();
    }
    if(this.swift && typeof (this.swift as any).validate === 'function') {
      (this.swift as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

