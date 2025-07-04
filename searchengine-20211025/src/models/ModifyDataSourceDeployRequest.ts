// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyDataSourceDeployRequestExtend } from "./ModifyDataSourceDeployRequestExtend";
import { ModifyDataSourceDeployRequestProcessor } from "./ModifyDataSourceDeployRequestProcessor";
import { ModifyDataSourceDeployRequestStorage } from "./ModifyDataSourceDeployRequestStorage";
import { ModifyDataSourceDeployRequestSwift } from "./ModifyDataSourceDeployRequestSwift";


export class ModifyDataSourceDeployRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the automatic full indexing feature.
   * 
   * @example
   * true
   */
  autoBuildIndex?: boolean;
  /**
   * @remarks
   * The extended information.
   */
  extend?: ModifyDataSourceDeployRequestExtend;
  /**
   * @remarks
   * The parameters of the process.
   */
  processor?: ModifyDataSourceDeployRequestProcessor;
  /**
   * @remarks
   * The information about the data source.
   */
  storage?: ModifyDataSourceDeployRequestStorage;
  /**
   * @remarks
   * The information about the incremental data source Swift.
   */
  swift?: ModifyDataSourceDeployRequestSwift;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. The system only checks the validity of the data source. Valid values: true and false.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the full index version.
   * 
   * @example
   * 1708674867
   */
  generationId?: number;
  static names(): { [key: string]: string } {
    return {
      autoBuildIndex: 'autoBuildIndex',
      extend: 'extend',
      processor: 'processor',
      storage: 'storage',
      swift: 'swift',
      dryRun: 'dryRun',
      generationId: 'generationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuildIndex: 'boolean',
      extend: ModifyDataSourceDeployRequestExtend,
      processor: ModifyDataSourceDeployRequestProcessor,
      storage: ModifyDataSourceDeployRequestStorage,
      swift: ModifyDataSourceDeployRequestSwift,
      dryRun: 'boolean',
      generationId: 'number',
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

