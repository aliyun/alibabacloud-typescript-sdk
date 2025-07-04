// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDataSourceRequestConfig } from "./CreateDataSourceRequestConfig";
import { CreateDataSourceRequestSaroConfig } from "./CreateDataSourceRequestSaroConfig";


export class CreateDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically rebuild the index.
   * 
   * @example
   * true
   */
  autoBuildIndex?: boolean;
  /**
   * @remarks
   * The configuration information.
   */
  config?: CreateDataSourceRequestConfig;
  /**
   * @remarks
   * The data center in which the data source is deployed.
   * 
   * @example
   * vpc_hz_domain_1
   */
  domain?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * ha-cn-pl32rf0****_test_api
   */
  name?: string;
  /**
   * @remarks
   * The configurations of the SARO data source.
   */
  saroConfig?: CreateDataSourceRequestSaroConfig;
  /**
   * @remarks
   * The type of the data source. Valid values: odps, oss, and swift.
   * 
   * @example
   * odps
   */
  type?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. This parameter is only used to check whether the data source is valid. Valid values: true and false.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoBuildIndex: 'autoBuildIndex',
      config: 'config',
      domain: 'domain',
      name: 'name',
      saroConfig: 'saroConfig',
      type: 'type',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoBuildIndex: 'boolean',
      config: CreateDataSourceRequestConfig,
      domain: 'string',
      name: 'string',
      saroConfig: CreateDataSourceRequestSaroConfig,
      type: 'string',
      dryRun: 'boolean',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(this.saroConfig && typeof (this.saroConfig as any).validate === 'function') {
      (this.saroConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

